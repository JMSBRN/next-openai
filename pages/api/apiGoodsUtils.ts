import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFile: '/Users/Acer/keyfile.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

export const getGoodsFromGoogle = async () => {
  const range = 'Sheet1!A1:E11'; 
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1XubvAOEQD2zhONEGegxYtOvKb8HmvIzBEuNFjSts9CU',
    range,
  });
 if(response.data.values) {
   const rows = response.data.values;
   const goods = rows.map((row) => {
     return {
       id: row[0],
       title: row[1],
       price: parseInt(row[2]),
       description: row[3],
       img: row[4],
     };
   });
 
   return goods;
 }
};

