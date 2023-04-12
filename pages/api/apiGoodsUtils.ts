import { google } from 'googleapis';

const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const jwt = new google.auth.JWT(
  process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  undefined,
  (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  target
);
const sheets = google.sheets({ version: 'v4', auth: jwt });

export const getGoodsFromGoogle = async () => {
  const range = 'Phones!A1:E11'; 
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
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

