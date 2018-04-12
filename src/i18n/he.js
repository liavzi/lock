export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'עברת את מספר הפעמים המותר לניסיון שינוי סיסמא. אנא המתן לפני שתנסה שוב',
      'lock.fallback': "אנו מצטערים, משהו השתבש בניסיון לשינוי סיסמא",
      enterprise_email:
        "Your email's domain is part of an Enterprise identity provider. To reset your password, please see your security administrator."
    },
    login: {
      blocked_user: 'המשתמש חסום.',
      invalid_user_password: 'פרטי משתמש שגויים.',
      'lock.fallback': "אנו מצטערים, משהו השתבש בניסיון ההתחברות",
      'lock.invalid_code': 'קוד שגוי',
      'lock.invalid_email_password': 'מייל או סיסמא שגויים',
      'lock.invalid_username_password': 'שם משתמש או סיסמא שגויים',
      'lock.network': 'לא ניתן להתחבר לשרת. אנא בדוק את החיבור ונסה שוב',
      'lock.popup_closed': 'החלון סגור . נסה שוב',
      'lock.unauthorized': 'אין הרשאה. נסה שוב',
      'lock.mfa_registration_required':
        'Multifactor authentication is required but your device is not enrolled. Please enroll it before moving on.',
      'lock.mfa_invalid_code': 'קוד שגוי. אנא נסה שוב',
      password_change_required:
        'אתה צריך לשנות סיסמא או בגלל שזה הכניסה הראשונה שלך או בגלל שתוקף הסיסמא פג', // TODO: verify error code
      password_leaked:
        'We have detected a potential security issue with this account. To protect your account, we have blocked this login. An email was sent with instruction on how to unblock your account.',
      too_many_attempts: 'Your account has been blocked after multiple consecutive login attempts.',
      session_missing:
        "Couldn't complete your authentication request. Please try again after closing all open dialogs",
      'hrd.not_matching_email': 'Please, use your corporate email to login.'
    },
    passwordless: {
      'bad.email': 'The email is invalid',
      'bad.phone_number': 'The phone number is invalid',
      'lock.fallback': "We're sorry, something went wrong"
    },
    signUp: {
      invalid_password: 'Password is invalid.',
      'lock.fallback': "We're sorry, something went wrong when attempting to sign up.",
      password_dictionary_error: 'Password is too common.',
      password_no_user_info_error: 'Password is based on user information.',
      password_strength_error: 'Password is too weak.',
      user_exists: 'The user already exists.',
      username_exists: 'The username already exists.'
    }
  },
  success: {
    // success messages show above the form or in a confirmation pane
    logIn: 'Thanks for logging in.',
    forgotPassword: "We've just sent you an email to reset your password.",
    magicLink: 'We sent you a link to log in<br />to %s.',
    signUp: 'Thanks for signing up.'
  },
  blankErrorHint: "Can't be blank",
  codeInputPlaceholder: 'your code',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'or',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'or',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: 'Login with your corporate credentials.',
  enterpriseActiveLoginInstructions: 'Please enter your corporate credentials at %s.',
  failedLabel: 'Failed!',
  forgotPasswordTitle: 'Reset your password',
  forgotPasswordAction: "Don't remember your password?",
  forgotPasswordInstructions:
    'Please enter your email address. We will send you an email to reset your password.',
  forgotPasswordSubmitLabel: 'Send email',
  invalidErrorHint: 'Invalid',
  lastLoginInstructions: 'Last time you logged in with',
  loginAtLabel: 'Log in at %s',
  loginLabel: 'Log In',
  loginSubmitLabel: 'Log In',
  loginWithLabel: 'Log in with %s',
  notYourAccountAction: 'Not your account?',
  passwordInputPlaceholder: 'your password',
  passwordStrength: {
    containsAtLeast: 'Contain at least %d of the following %d types of characters:',
    identicalChars: 'No more than %d identical characters in a row (e.g., "%s" not allowed)',
    nonEmpty: 'Non-empty password required',
    numbers: 'Numbers (i.e. 0-9)',
    lengthAtLeast: 'At least %d characters in length',
    lowerCase: 'Lower case letters (a-z)',
    shouldContain: 'Should contain:',
    specialCharacters: 'Special characters (e.g. !@#$%^&*)',
    upperCase: 'Upper case letters (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Otherwise, enter your email to sign in<br/>or create an account',
  passwordlessEmailCodeInstructions: 'An email with the code has been sent to %s.',
  passwordlessEmailInstructions: 'Enter your email to sign in<br/>or create an account',
  passwordlessSMSAlternativeInstructions:
    'Otherwise, enter your phone to sign in<br/>or create an account',
  passwordlessSMSCodeInstructions: 'An SMS with the code has been sent<br/>to %s.',
  passwordlessSMSInstructions: 'Enter your phone to sign in<br/>or create an account',
  phoneNumberInputPlaceholder: 'your phone number',
  resendCodeAction: 'Did not get the code?',
  resendLabel: 'Resend',
  resendingLabel: 'Resending...',
  retryLabel: 'Retry',
  sentLabel: 'Sent!',
  showPassword: 'Show password',
  signupTitle: 'Sign Up',
  signUpLabel: 'Sign Up',
  signUpSubmitLabel: 'Sign Up',
  signUpTerms: '',
  signUpWithLabel: 'Sign up with %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On enabled',
  submitLabel: 'Submit',
  unrecoverableError: 'Something went wrong.<br />Please contact technical support.',
  usernameFormatErrorHint:
    'Use %d-%d letters, numbers and the following characters: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'your username',
  usernameOrEmailInputPlaceholder: 'username/email',
  title: 'Auth0',
  welcome: 'Welcome %s!',
  windowsAuthInstructions: 'You are connected from your corporate network&hellip;',
  windowsAuthLabel: 'Windows Authentication',
  mfaInputPlaceholder: 'Code',
  mfaLoginTitle: '2-Step Verification',
  mfaLoginInstructions: 'Please enter the verification code generated by your mobile application.',
  mfaSubmitLabel: 'Log In',
  mfaCodeErrorHint: 'Use %d numbers'
};
