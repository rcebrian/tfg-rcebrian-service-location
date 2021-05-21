import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const APP = {
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  secret: process.env.JWT_SECRET,
};

const JWT = {
  secret: process.env.JWT_SECRET,
  expires: process.env.JWT_EXPIRES,
};

const DATABASE = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT,
};

const FIREBASE = {
  serviceAccount: {
    type: 'service_account',
    project_id: 'tfg-rcebrian-2021-310618',
    private_key_id: 'bace64af90d49ef7b92a3a69da18f53105b98336',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgMnhHP/vKspsF\nuWIoq4gd1cUM5qfjUc+OU8XTvRD3wDFVou4zWNmskqBUUPsys7F2duVJyerB2gie\nKXZDan6N7qOU2QAzO3NKRNIzBWC3dA2vZsaenJCz1JIYhvEHm+2vpiryXMknGQcj\ng8fr9/c+7Lsmurm50gn+CDi5veOeGnf6XwZXUEE3tvnGXki66QGgVbgKbVQgnFfN\n/ax+A51Pf7LQMOn6D77+iyVVBx382NL7PSC6oTWENO+WA3K73qS2OZQ3zonwlu1v\nOO2zVzsIgEhe4Ad5il2gjiW/gx6hudXAEvjIi2qYXRFaC+EtEBdCtTrgx7tfSlGB\nZU9poy4/AgMBAAECggEAK+k2rZ3WjyjUPBbHJvgRvOY1pgU3NMq9QD8gLAyH2j6G\nayNyTBRG7gn55QnHaXLQe0dmOUGW/UjbDz9HroSZLOtklq65307xkcZQ9TVEcCoG\n1CfpFv/LR62Gv88OPlNIBnMhTj7mFwZL46TX71utzWFIdplz7vU4h8zMb3TFtB1V\nFaHzHR7fBZP4wnLnH48Ts6Xmc11Oa6SXIdRyL8FAHIkhWfLyu/maV9IyAQ1vQRJS\nEbrtXK5ueNUl0uc9HnibP7Es5/dNUKY4cNhNYtpQvXlXc4s8+rWHUhpwatvG4Slx\n1+UF+5o660+1xRGJnKpayt7rIDDsdl6cEIQe0UcQ4QKBgQD7e23fhkFIC+PZUVPy\nj6pG62HmAk98gY2B516vBYdMb0NxDQVgABb7QO9tp0AZfyce7RUxa1lyfR2ZbuTF\n1WwwRUaEH+AzsSOlWON8+jUjg9qbtvS8Df3G6YZ70SVt38pgk/2ABFeIis/GTyk3\n3Hj/TGcP3YGeavaa+3GrFOqgmwKBgQDkOY50TBzZ+E9Kc18vv2yddGHKB2dHr+kL\n3FaiH6B0+olcvrJYnedoNajsgVqEPdedKJ8jQF3L+izSrnpWTzzkHwLtIQVyQASc\nbcDGGZZ+HSL7xpQ/u+m550JUERCDREhEj+fh5fGKB5iZhrYDatZJZglw/mgVoQ9L\n9d+NP3aJLQKBgEfGncBrYByBEEIJXU1gxbfCHMn6JNejXlESSUro6Anfw77zeXJB\n9E035l5Emx3r1a2U+zSEsB3mKdmN9guk82D/lLXHJ0V5rHPX3+3et+XwDyfcWxOF\nZsYsBq82LVmjwu43ruWn15foDo9KLrh726j6FHxJu2IMo1/uni23JZQ7AoGBAI3Q\nIe+r9+WNgR+fDw+pYAF69uTFsux9p08CbCazhk4J+97QdBvSip9bcIr9WdSAZQE3\n46LQ9TexTbbgSg5lkE2j43qboTm8A+F75WRzM+tLiZhvbWEpD/O/epyoOd2HSWyp\nCwp4ip0dWTpU1bbL5TmYmNdIjj6aZNnrfyzSuYJFAoGAafO3GPnhNRqKwxty7G3h\neCRvsi28fwfGE01cm4ieQlD5oEbYUzmLK/gD6XW/fJmPOcUpIx7NAz/vHKN3UnYR\nWb9RY8KG1difBM0/WW10Oq316Q9mzJUw+MO3mXsnrq3Rj1YV7jKgO5YBdQSVdsYS\nJKSW/wWoMgTKhIpqExGIFzI=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-ld3bi@tfg-rcebrian-2021-310618.iam.gserviceaccount.com',
    client_id: '106860199068812438318',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ld3bi%40tfg-rcebrian-2021-310618.iam.gserviceaccount.com',
  },
  baseCollection: process.env.FIREBASE_DB,
};

export {
  APP, JWT, DATABASE, FIREBASE,
};
