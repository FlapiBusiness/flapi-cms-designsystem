import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fr from '@vee-validate/i18n/dist/locale/fr.json'
import { required, email, confirmed, numeric, min, max } from '@vee-validate/rules'

/**
 * Configure vee-validate with global rules and localization.
 */
const configureVeeValidate: () => void = (): void => {
  // Define global rules
  defineRule('required', required)
  defineRule('email', email)
  defineRule('confirmed', confirmed)
  defineRule('min', min)
  defineRule('max', max)

  /**
   * Custom numeric rule with a personalized error message.
   * @param {string | number} value - The value to validate
   * @param {Record<string, any>} params - The parameters to pass to the rule
   * @returns {string | boolean} - The error message or true if the rule passes
   */
  defineRule('numeric', (value: string | number, params: Record<string, any> = {}) => {
    if (numeric(value)) {
      return true // Rule passes
    }

    return params.message || 'Le champ doit être un nombre valide.'
  })

  defineRule('complex_password', (value: string) => {
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])[A-Za-z\d\S]{8,}$/
    return (
      passwordRegex.test(value) ||
      'Le mot de passe doit comporter au moins 8 caractères, inclure au minimum un chiffre, une lettre majuscule et un caractère spécial.'
    )
  })

  defineRule('price_format', (value: string) => {
    const priceRegex: RegExp = /^[0-9]+([.,][0-9]{1,2})?$/
    return priceRegex.test(value) || 'Le champ prix doit être un nombre valide avec un maximum de deux décimales.'
  })

  // Configure localization
  localize({
    en,
    fr,
  })

  // Set the default locale
  configure({
    generateMessage: localize('fr', {
      names: {},
    }),
  })
}

export default configureVeeValidate
