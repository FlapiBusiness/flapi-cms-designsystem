import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fr from '@vee-validate/i18n/dist/locale/fr.json'
import { required, email, confirmed, numeric, min, max } from '@vee-validate/rules'

/**
 * Plugin Nuxt pour la configuration globale de VeeValidate.
 * @returns {void}
 */
export default defineNuxtPlugin((): void => {
  setupValidationRules()
  setupLocalization()
})

/**
 * Définit les règles de validation globales pour `vee-validate`.
 * @returns {void}
 */
function setupValidationRules(): void {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('confirmed', confirmed)
  defineRule('min', min)
  defineRule('max', max)

  /**
   * Règle personnalisée pour les valeurs numériques.
   * @param {string | number} value - La valeur à valider.
   * @param {Record<string, any>} [params={}] - Paramètres optionnels.
   * @returns {boolean | string} `true` si valide, sinon un message d'erreur.
   */
  defineRule('numeric', (value: string | number, params: Record<string, any> = {}): boolean | string => {
    return numeric(value) ? true : params.message || 'Le champ doit être un nombre valide.'
  })

  /**
   * Règle personnalisée pour la validation des mots de passe complexes.
   * @param {string} value - Le mot de passe à valider.
   * @returns {boolean | string} `true` si valide, sinon un message d'erreur.
   */
  defineRule('complex_password', (value: string): boolean | string => {
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])[A-Za-z\d\S]{8,}$/
    return passwordRegex.test(value)
      ? true
      : 'Le mot de passe doit comporter au moins 8 caractères, inclure un chiffre, une majuscule et un caractère spécial.'
  })

  /**
   * Règle personnalisée pour la validation des prix.
   * @param {string} value - La valeur à valider.
   * @returns {boolean | string} `true` si valide, sinon un message d'erreur.
   */
  defineRule('price_format', (value: string): boolean | string => {
    const priceRegex: RegExp = /^[0-9]+([.,][0-9]{1,2})?$/
    return priceRegex.test(value) ? true : 'Le champ prix doit être un nombre valide avec un maximum de deux décimales.'
  })
}

/**
 * Configure la localisation des messages d'erreur.
 * @returns {void}
 */
function setupLocalization(): void {
  localize({
    en,
    fr,
  })

  configure({
    generateMessage: localize('fr', {
      names: {},
    }),
  })
}
