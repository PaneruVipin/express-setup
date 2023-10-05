module.exports = {
  body: {
    jsonConfig: {
      // limit:"10mb"
      /**For configuration related to JSON request bodies,
       *  please consult the Express.js documentation
       * at https://expressjs.com/en/5x/api.html#app.*/
    },
    multipartConfig: {
      //   limits: { fileSize: 50 * 1024 * 1024 },
      //   useTempFiles: true,
      //   tempFileDir: "/tmp/",
      /** For configuration related to handling multipart data,
       * please refer to the Express-FileUpload documentation
       * at https://www.npmjs.com/package/express-fileupload#examples.*/
    },
  },
  views: {
    viewsDir: "views",
    viewEngine: "jade",
  },
  staticPath: "public",
};
