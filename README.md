[![Netlify Status](https://api.netlify.com/api/v1/badges/964c3e66-dce2-4ba0-aa63-30650398fc13/deploy-status)](https://app.netlify.com/sites/bjakas-react-todo-app/deploys)

---

# Todo App

Example todo appliaction developed during frontend developer course in Algebra.

**Try it out**: https://bjakas-react-todo-app.netlify.app/

## Instructions
1. `npm install`
2. `npm run start`
3. `npm install --save redux react-redux`

## Features
- [x] Create an item
- [x] List all items
- [x] Delete an item
- [x] Mark an item as completed
- [ ] Add reminder to item (date and time)
- [ ] Show motivational quote from https://zenquotes.io/api/random
- [ ] Delete all items - uz pomoć reducera i reduxa (dodamo dugme onClick posalje akciju u store za brisanje svih itema, stavimo prazni niz), definiramo novu akciju i uredimo naš reducer i to je to
- [ ] Calendar
- [ ] Categories
- [ ] Pop quizzes
- [ ] Recurring items (scheduling on calendar)
- [ ] Export (CSV)
- [ ] Report (items completed by day, month, etc.)
- [ ] Add SCSS styling - node-sass

### Vježba: TODO APP

Trajanje: 20min (21:05)


U postojećoj aplikaciji doraditi sljedeće...


1. Prebaciti obrazac za kreaciju itema iz App komponente u zasebnu komponentu (npr. components/TodoItemForm)

1a. Prebaciti sav state koji upravlja obrascem iz App komponente u komponentu obrasca

1b. Koristiti komponentu obrasca u App komponenti

1c. Dodati prop u obrazac za kreaciju itema: onSubmitItem. Prop predstavlja funkciju koja će se pozvati na onSubmit obrasca i proslijediti stanje obrasca u trenutku submita. App komponenta će pod tim propom proslijediti funkciju koja će upisati kreirani item u svoj todoStae.


SAVJET:

1. Provjerite kako smo do sada radili obrasce


BONUS:

1. Push na GitHub :)