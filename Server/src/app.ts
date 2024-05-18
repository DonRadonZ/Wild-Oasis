const express = require('express');
const morgan = require('morgan');



// 1) MIDDLEWARE
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    }