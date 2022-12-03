const message = {
  "username": "ツール配信bot",
  "content": "新しいバージョンのリリースのお知らせです😎",
  "embeds": [
    {
      "title":process.env.NAME,
      "description":process.env.BODY,
      "color":51711
    }
  ]
};
console.log(process.env)
console.log(message);