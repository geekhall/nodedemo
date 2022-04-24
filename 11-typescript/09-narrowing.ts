
function printAll(strings: string | string[] | null) {
  if (strings && typeof strings === "object") {
    for (const s of strings) {
      console.log(s);
    }
  } else if (typeof strings === "string") {
    console.log(strings);
  }
}

printAll(null)
printAll(['King', 'Eric', 'Ethan'])
printAll("geekhall")

