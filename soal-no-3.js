const ChangeString = {
  string: "Fazztrack",
  getString() {
    const capitalString = this.string.toUpperCase();
    const newString = capitalString.split("");
    console.log(newString);
  },
};

ChangeString.getString();
