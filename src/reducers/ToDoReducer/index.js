// 2. korak

const initialState = {
  items: [],
};

export const selectAllItems = (state) => state.items; // vidi ToDoItemList

// 3. korak - definiramo konstante

const type = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  MARK_ITEM_AS_DONE: 'MARK_ITEM_AS_DONE',
};

// 4. definiramo f. koje će kreirat akcije, te f. se u praksi zovu ACTION CREATOR F. - f. koje naprave objekt akcije i pripreme ga s relevantnim podatcima

// akcija kreiranja itema: addItem kreiramo objekt s typeom ADD_ITEM i fali nam podatak kakav item kreiramo, tako da proslijedimo objekt itema koji smo nazvali item; (ako imamo var i property s istim imenom možemo pisati samo identifikator parametra funkcije pa možemo pisati item:item ili item u parametru funkcije i dolje samo item) 

export function addItem(item) {
  return { type: type.ADD_ITEM, item: item }; // proslijedimo objekt itema
}

// akcija brisanja itema: deleteItem - možemo proslijediti index i item, ali je dobra praksa proslijediti samo item, a index možemo povući unutar statea; action type je DELETE_ITEM i item:item proslijedimo

export function deleteItem(item) {
  return { type: type.DELETE_ITEM, item: item };
}
// akcija je li item završen ili nije: markItemAsDone proslijedimo type MARK_ITEM_AS_DONE i item:item te is Done: isDone

export function markItemAsDone(item, isDone) {
  return { type: type.MARK_ITEM_AS_DONE, item: item, isDone: isDone };
}

// 1.korak - od tu krećemo 
// konstante identificiraju tip akcije u reducer i na temelju tog typa kojeg dodijelimo action objektu pa kažemo ako je action tip taj i taj napravi nešto; reducer primijeni akcije da bi promijenio stanje našeg inicijalnog statea u novi state
// 5. korak - dodijelimo inicijalno stanje kao def. vrijednost za naš state (ako state nije proslijeđen proslijedi (koristi) inicijalni state)

export default function reducer(state = initialState, action) {
  // na temelju action.typea vrati određeni objekt statea
  switch (action.type) {
    // prvo prekopiramo i. state i na njegovo mjesto stavimo novi niz itema unutar kojeg se nalazi stari niz i na kraj stavimo item iz akcije(item koji smo proslijedili kroz akciju)
    case type.ADD_ITEM: {
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.item, isDone: false }, // po d. početno stanje itema je da je isDone u false
        ],
      };
    }

    // vidi niže opis 

    case type.DELETE_ITEM: {
      const index = state.items.indexOf(action.item); // definiramo varijablu koja sadrži index itema unutar akcije
      // ako nema itema u nizu možemo napraviti provjeru ako je index -1, ako nema tog el. u nizu vrati trenutni state bez ikakve promjene
      if (index === -1) {
        return state;
      }

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };
    }

    // vidi niže opis 
    // kod switch casea nakon casea nema vitičastih zagrada, ali zbog scopea kada imamo var istog naziva u različitim caseima koristimo vitičaste zagrade pa možemo imati const index jer imamo dva scopea 

    case type.MARK_ITEM_AS_DONE: {
      const index = state.items.indexOf(action.item);

      if (index === -1) {
        return state;
      }

      // između odsječka dva niza ugnijezimo promijenjeni item, uzmemo trenutni item na tom indexu i njega kopiramo pa preko njega kopiramo action item i onda na kraju zalijepimo stanje isDone na temelju onoga što smo stavili u samoj akciji da to stanje bude

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            ...action.item,
            isDone: action.isDone,
          },
          ...state.items.slice(index + 1),
        ],
      };
    }
    // ako ne prepoznamo akciju vrati inicijalni state
    default:
      return state;
  }
}

// 6. korak reducer ubacimo u src/index.js i umotamo čitavu aplikaciju u naš redux store tako da je on dostupan svim child elementima, importamo createStore i naš reducer, i kreiramo store; te importamo Provider za context samog reducera kojem smo proslijedili store i koji omotava našu App komponentu da ona i njezini childeovi mogu pristupiti storeu

// reducer je funkcija i redux od njih napravi store; koristimo createStore metodu od redux api i proslijedimo reducer f. unutra i onda taj redux store poziva taj reducer svaki put kad dođe do neke akcije; proslijedimo state i akciju (odnosno taj objekt) i deriviramo novi state na temelju njihove interakcije
// reducer f sa dva parametra koja vraca uvijek state
// initialState definiramo s items praznim nizom
// razmislimo o aplikaciji što radimo i te korake pretvorimo u akcije koje su tu dodavanje itema, brisanje itema i akcija promjene statusa itema (mark as done, mark as to do)
// dakle imamo 3 akcije i krećemo od toga da definiramo typeove akcija, tj. konstante koje nazovemo deskriptivnim imenima da lakše znamo o čemu je riječ ADD_ITEM, DELETE_ITEM, MARK_ITEM_AS_DONE; sve ove akcije se šalju u reducer pa je dobro da su čitljive da kužimo što se radi, jedna akcija dodaje item, jedna briše i jedna ga označava je li done ili nije
// reducer će te akcije primijenit da bi promijenio stanje našeg inicijalnog statea u neki novi state
// definiramo f. koje će radit akcije: action creatori - f. koje pripreme objekt akcije i pripreme ga s relevantnim podatcima
// 1. akcija kreiranja itema: addItem kreiramo objekt s typeom ADD_ITEMi fali nam podatak kakav item kreiramo, tako da proslijedimo objekt itema koji smo nazvali item; (ako imamo var i property s istim imenom možemo pisati samo identifikator parametra funkcije pa možemo pisati item:item ili item u parametru funkcije i dolje samo item)
// 2. akcija je brisanje itema: deleteItem - možemo proslijediti index i item, ali je dobra praksa proslijediti samo item, a index možemo povući unutar statea; action type je DELETE_ITEM i item:item proslijedimo
// 3. akcija je li item završen ili nije: markItemAsDone proslijedimo type MARK_ITEM_AS_DONE i item:item te is Done: isDone
// reducer popunjavamo
// 1. dodijelio initialState kao def. vrijednost za naš state
// 2. ubacujemo komad logike koji će na temelju action typea vratiti novi objekt statea (po def. uvijek vraćamo inicijalni state)
// 3. krećemo od addItema - trenutni state prekopiramo, naš inicijalni state i na njegovo mjesto stavimo novi niz itema unutar kojeg se nalazi stari niz i na kraju stavimo naš item iz akcije, item kojeg smo kreirali u akciji i njega lijepimo na kraj našeg niza; mi kad proslijedimo item unutra naš store bi se trebao pobrinuti da taj item ima ispravne podatke i informacije na sebi, a po def. item kad se kreira treba biti u stanju nedovršenosti; potom kreiramo novi item i stavimo da je isDone u false; upisujemo novi item u state.
// 4. radimo brisanje itema - primjenjujemo istu logiku koju smo imali u app komponenti: uzimamo niz naših itema i mijenjamo ga tako da odrežemo komad našeg niza do kojeg želimo obrisat i nakon i to spojimo, da bismo to napravili treba nam index, a to radimo da definiramo varijablu koja sadrži taj index const index = state.items.indexOf(action.item); -- ovo nam vraća index našeg itema i nakog toda index možemo iskoristiti da se unutar statea odreže komad od 0 do indexa i od koraka nakon indexa do kraja niza; ako nemamo index možemo napraviti provjeru ako je index -1 (ako nema tog el. u nizu) vrati trenutni state
// 5. markItemAsDone - treba nam index koji izvlačimo iz items niza u state na temelju toga je li u pitanju naš action.item i stavimo isto uvjet kao gore ako nisi pronašao item; potom vratimo state.slice kao što je bilo i u app-u i onda između ta dva odsječena itema uglavimo promijenjeni item (uzmi mi item u trenutnom stanju i preko njega kopiraj novi item iz akcije i preko njega stavi stanje isDone) - napravimo ažuriranje tog itema u cijelosti
// sada reducer trebamo ubaciti u našu aplikaciju pa u src/index.js umotamo čitavu aplikaciju u naš redux store: importamo {createStore} from 'redux' i importamo toDoReducer from './reducers/ToDoReducer' i importamo {Provider} from 'react-redux'; kreiramo const toDoStore i koristimo metodu createStore(toDoReducer) te ubacimo u Provider
// sada u app komponenti možemo koristiti store, dispatchat akcije da bismo rukovali s itemima u storu i prikazivali te rezultate
// u App comp. importamo hookove iz react-redux i napravimo dispatch i todoIteme useSelector vrati mi items iz selektiranog statea; selektor će uzet state i spremiti items; sada pola logike možemo izbrisati i preurediti i importamo akcije addItem, deleteItem i markItemAsDone i dispatchamo svaku akciju i umjesto todoState koristimo todoItems; sada naša aplikacija više ne koristi state da rukuje s itemima nego koristi redux store - umjesto logike za rukovanje sada imamo jednu liniju za dispatchanje akcija s potrebnim parametrima na temelju kojih store odluči što treba napraviti (uglavili smo dispatch, selektore i akcije za naše iteme)
// selector možemo ubaciti u naš reducer kada imamo puno različitih selectora; selectoru proslijedimo argument na temelju kojeg on selektira; u reduceru definiramo selector ili kroz funkciju ili const export const selectAllItems = (state) => state.items; - time smo dobili priliku da selektor također ne definiramo sami nego da ga importamo kroz reducer u app.js (import {selectAllItems } from.... i niže u function App upišemo const todoItems = useSelector(selectAllItems);)
// reducer se brine o stanju u aplikaciji