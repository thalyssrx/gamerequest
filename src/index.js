const {chromium} = require('playwright');
const fs = require('fs');
const path = require('path');

const authFile = path.join(__dirname,'auth_state.json');

