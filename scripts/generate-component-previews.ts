import puppeteer, { Browser, Page } from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Configuration stricte
interface Story {
  id: string
  name: string
  kind: string
}

interface StorybookStory {
  id: string
  title: string
  name: string
}

interface StorybookStoriesResponse {
  stories: Record<string, StorybookStory>
}
// @ts-ignore
const __filename: string = fileURLToPath(import.meta.url)
const __dirname: string = path.dirname(__filename)
const STORYBOOK_URL: string = 'http://localhost:6006'
const OUTPUT_DIR: string = path.resolve(__dirname, '../src/runtime/assets/previews')
const VIEWPORT_WIDTH: number = 800
const VIEWPORT_HEIGHT: number = 600
const TIMEOUT: number = 30000
const STORIES_DIR: string = path.resolve(__dirname, '../stories')

// Fonction pour lancer Storybook (optionnel)
const startStorybook = async (): Promise<void> => {
  console.log('Assurez-vous que Storybook est lancé sur', STORYBOOK_URL)
}

// Fonction pour récupérer la liste des stories
const getStories = async (): Promise<Story[]> => {
  const stories: Story[] = []

  const walkDir = (dir: string): void => {
    const files: string[] = fs.readdirSync(dir)
    for (const file of files) {
      const filePath: string = path.join(dir, file)
      const stat: fs.Stats = fs.statSync(filePath)
      if (stat.isDirectory()) {
        walkDir(filePath)
      } else if (filePath.endsWith('.stories.ts')) {
        const relativePath: string = path.relative(STORIES_DIR, filePath)
        const storyName: string = path.basename(file, '.stories.ts')
        // Générer un ID compatible avec Storybook (basé sur le chemin)
        const storyId: string = relativePath
          .replace(/\.stories\.ts$/, '')
          .replace(/\//g, '-')
          .replace(/\\/g, '-')
          .toLowerCase()
        stories.push({
          id: `${storyId}-default`, // Suppose que la story par défaut est nommée "Default"
          name: storyName,
          kind: relativePath.replace(/\.stories\.ts$/, ''),
        })
      }
    }
  }

  try {
    walkDir(STORIES_DIR)
    console.log(`✅ Récupéré ${stories.length} stories depuis les fichiers locaux`)
    return stories
  } catch (error: unknown) {
    console.error('❌ Erreur lors de la récupération des stories :', (error as Error).message)
    return []
  }
}

// Fonction pour capturer une story
const captureStory = async (page: Page, story: Story): Promise<void> => {
  const storyUrl: string = `${STORYBOOK_URL}/iframe.html?id=${story.id}&viewMode=story`
  const outputFile: string = path.join(OUTPUT_DIR, `${story.name}.png`)

  try {
    await page.goto(storyUrl, { waitUntil: 'networkidle2', timeout: TIMEOUT })
    await page.setViewport({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT })

    // Attendre que le composant soit rendu
    await page.waitForSelector('#storybook-root', { timeout: TIMEOUT })

    // Capture d'écran avec options correctes
    await page.screenshot({
      ...({
        path: outputFile,
        fullPage: false,
        type: 'png',
      } as any),
    })

    console.log(`✅ Capture enregistrée pour ${story.name} : ${outputFile}`)
  } catch (error: unknown) {
    console.error(`❌ Erreur lors de la capture de ${story.name} :`, (error as Error).message)
  }
}

// Fonction principale
const generatePreviews = async (): Promise<void> => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    console.log(`✅ Dossier créé : ${OUTPUT_DIR}`)
  }

  let browser: Browser | null = null

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page: Page = await browser.newPage()
    const stories: Story[] = await getStories()

    for (const story of stories) {
      await captureStory(page, story)
    }

    console.log('✅ Toutes les captures ont été générées')
  } catch (error: unknown) {
    console.error('❌ Erreur lors de l’exécution :', (error as Error).message)
    process.exit(1)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

// Exécuter le script
const run = async (): Promise<void> => {
  await startStorybook()
  await generatePreviews()
}

run().catch((error: unknown) => {
  console.error('❌ Erreur fatale :', (error as Error).message)
  process.exit(1)
})
