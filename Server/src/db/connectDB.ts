process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

  const { USERNAME, PASSWORD, HOST, PORT, DBNAME } = process.env;
  const connectDB = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DBNAME}`;