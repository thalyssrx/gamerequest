import 'dotenv/config';

export const config = {
  epic: {
    email: process.env.EPIC_EMAIL,
    password: process.env.EPIC_PASSWORD,
  },
  prime: {
    email: process.env.PRIME_EMAIL,
    password: process.env.PRIME_PASSWORD,
  },
  headless: process.env.HEADLESS === 'true',
};

export function validateConfig(service){
    const creds = config[service]
    if (!creds.email || !creds.password){
        throw new Error(`Erro nas credenciais de ${service}. Verifique as variaveis de ambiente.`)
    }
}