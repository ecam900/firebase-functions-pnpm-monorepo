import * as functions from 'firebase-functions';

import { writeHello } from 'core'; // 👈 UNCOMMENT ME!

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });

  const greeting = writeHello(); // 👈 UNCOMMENT ME!

  // const greeting = 'IDK feeling loggy'; // 🕶️ MAKE ME A COMMENT
  response.send(greeting);
});
