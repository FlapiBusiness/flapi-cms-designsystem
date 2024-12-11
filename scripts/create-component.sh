#!/bin/bash

# Chemin de base pour les composants
BASE_PATH="src-app/src-nuxt/components"

# Vérification de l'argument
if [ -z "$1" ]; then
  echo "Usage: npm run create:component <path/to/ComponentName>"
  exit 1
fi

# Récupérer le chemin complet et le nom du composant
INPUT_PATH="$1"
DIR_PATH=$(dirname "$INPUT_PATH")
COMPONENT_NAME=$(basename "$INPUT_PATH")

# Forcer la première lettre en majuscule pour le nom du composant
CAPITALIZED_NAME="$(echo ${COMPONENT_NAME:0:1} | tr '[:lower:]' '[:upper:]')${COMPONENT_NAME:1}"

# Construire les chemins finaux
FULL_DIR_PATH="$BASE_PATH/$DIR_PATH"
COMPONENT_FILE="$FULL_DIR_PATH/$CAPITALIZED_NAME.vue"
STORYBOOK_FILE="$FULL_DIR_PATH/$CAPITALIZED_NAME.stories.ts"

# Créer les dossiers nécessaires
mkdir -p "$FULL_DIR_PATH"

# Générer le fichier .vue si non existant
if [ ! -f "$COMPONENT_FILE" ]; then
  cat <<EOF > "$COMPONENT_FILE"
<template>
  <h1>{{ props.title }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the flapi button component props
 * @type {${CAPITALIZED_NAME}Props}
 * @property {string} title - The title of the component
 */
export type ${CAPITALIZED_NAME}Props = {
  title: string
}

const props: ${CAPITALIZED_NAME}Props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
EOF
  echo "✅ Composant Vue créé : $COMPONENT_FILE"
else
  echo "❌ Le composant Vue existe déjà : $COMPONENT_FILE"
fi

# Générer le fichier .stories.ts si non existant
if [ ! -f "$STORYBOOK_FILE" ]; then
  cat <<EOF > "$STORYBOOK_FILE"
import type { Meta, StoryFn } from '@storybook/vue3';
import ${CAPITALIZED_NAME} from './${CAPITALIZED_NAME}.vue';
import type { ${CAPITALIZED_NAME}Props } from './${CAPITALIZED_NAME}.vue';

type ${CAPITALIZED_NAME}Args = ${CAPITALIZED_NAME}Props

export default {
    title: '$DIR_PATH/${CAPITALIZED_NAME}',
    component: ${CAPITALIZED_NAME},
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design',
        },
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the component',
        }
    },
} as Meta<typeof ${CAPITALIZED_NAME}>;

export const Default: StoryFn<${CAPITALIZED_NAME}Args> = (args, { argTypes }) => ({
    components: { ${CAPITALIZED_NAME} },
    props: Object.keys(argTypes),
    setup() {
        return { args };
    },
    template: \`
      <${CAPITALIZED_NAME} v-bind="args" :title="args.title" />
    \`,
});

Default.args = {
    title: '${CAPITALIZED_NAME}',
};
EOF
  echo "✅ Fichier Storybook créé : $STORYBOOK_FILE"
else
  echo "❌ Le fichier Storybook existe déjà : $STORYBOOK_FILE"
fi
