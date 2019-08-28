"use strict";

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

var ROLES = {
  "PO": "#67B7DC",
  "CJE": "#6771DC",
  "Designer": "#A367DC",
  "Tester": "#DC66CE",
  "Team Member": "#6793DC",
  "Данных нет": "black"
};


// var ROLES = {
//   "PO": "#003f5c",
//   "CJE": "#58508d",
//   "Designer": "#bc5090",
//   "Tester": "#ff6361",
//   "Team Member": "#ffa600",
//   "Данных нет": "black"
// };
var data = {
  category: "ДомКлик РБ.",
  value: 541,
  children: [{
    category: "DomClick",
    value: 80,
    children: [{
      category: "Domclick mortgage",
      value: 11,
      children: [{
        "category": "Floyd Marsh",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Gates Kemp",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Simone Brock",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Tucker Acosta",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Chasity Giles",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Walsh Love",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Luna Davis",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Fernandez Mcdonald",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }, {
      category: "Java developers Core",
      value: 4,
      children: [{
        "category": "Grant Holcomb",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Beryl Cox",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Vera Acosta",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Leslie Roman",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }, {
      category: "Java developers Web",
      value: 1,
      children: [{
        "category": "Grant Holcomb",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }, {
      category: "Mobile developers",
      value: 8,
      children: [{
        "category": "Trisha Suarez",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Beverley Barr",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Wendi Fletcher",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Cummings Murray",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Rosanne Klein",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Terry Flynn",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Wiggins Poole",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Elba Peterson",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }, {
      category: "PHP/Python developers",
      value: 4,
      children: [{
        "category": "Matilda Maxwell",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Roach Cain",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Watkins Pope",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Margret Figueroa",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "Python developers Data",
      value: 1,
      children: [{
        "category": "Margret Figueroa",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "Tribe management ДомКлик",
      value: 1,
      children: [{
        "category": "Margret Figueroa",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "UX",
      value: 2,
      children: [{
        "category": "Margret Figueroa",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Margret Figueroa",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "Витрина ОН",
      value: 9,
      children: [{
        "category": "Mann Lindsey",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Hawkins Robles",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Nell Snider",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Schroeder Mann",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Olivia Campos",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Morin Vaughn",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Conley Freeman",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Morgan Mercer",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Franco Heath",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "ДомКлик ВСП",
      value: 10,
      children: [{
        "category": "Donaldson Schneider",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Vilma Dale",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Lizzie Mclaughlin",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Celina Mcintosh",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Benjamin Pope",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Gena Pacheco",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Nelson Roy",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "Не присвоено",
      value: 29,
      children: [{
        "category": "Leblanc Rojas",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Walters Torres",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }]
  }, {
    category: "IT",
    value: 64,
    children: [{
      category: "CTO - Housing Solutions",
      value: 5,
      children: [[{
        "category": "Hyde Brock",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Walsh Middleton",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Wall Abbott",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Janie Cook",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Pacheco Washington",
        "value": 1,
        "children": [],
        "role": "Tester"
      }]]
    }, {
      category: "Java developers Core",
      value: 1,
      children: [{
        "category": "Pacheco Washington",
        "value": 1,
        "children": [],
        "role": "Tester"
      }]
    }, {
      category: "PHP/Python developers",
      value: 1,
      children: [{
        "category": "Pacheco Washington",
        "value": 1,
        "children": [],
        "role": "Tester"
      }]
    }, {
      category: "Python developers Data",
      value: 7,
      children: [[{
        "category": "Benita Glenn",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Day Gay",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Cantrell Lucas",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Katrina Berg",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Reva Walls",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Camacho Livingston",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Oliver Wood",
        "value": 1,
        "children": [],
        "role": "Designer"
      }]]
    }, {
      category: "Python developers Web",
      value: 9,
      children: [[{
        "category": "Bauer Cooper",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Leta Rose",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Rose Burch",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Janna Wise",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Dolly Rios",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Giles Pickett",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Lynn Nguyen",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Acosta Salazar",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Lila Cooley",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]]
    }, {
      category: "Smart Area",
      value: 3,
      children: [[{
        "category": "Chen Waters",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Richards Carson",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Alexandra Cobb",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]]
    }, {
      category: "SREC Ops",
      value: 6,
      children: [[{
        "category": "Koch Rutledge",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Gonzalez Sparks",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Gould Barr",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Noemi Cook",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Parrish Guerrero",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Wiggins Ferrell",
        "value": 1,
        "children": [],
        "role": "Designer"
      }]]
    }, {
      category: "Витрина ОН",
      value: 2,
      children: [{
        "category": "Gould Barr",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Noemi Cook",
        "value": 1,
        "children": [],
        "role": "Designer"
      }]
    }, {
      category: "ДомКлик ВСП",
      value: 1,
      children: [{
        "category": "Gould Barr",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }, {
      category: "ЕКП. Екатеринбург",
      value: 4,
      children: [{
        "category": "Gould Barr",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Noemi Cook",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Gould Barr",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Noemi Cook",
        "value": 1,
        "children": [],
        "role": "Designer"
      }]
    }, {
      category: "Не присвоено",
      value: 25,
      children: [{
        "category": "Betsy Cameron",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Fran Hartman",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Sarah Hickman",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Billie Leach",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Dorothy Alvarado",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Hull Sanders",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }]
  }, {
    category: "Партнеры",
    value: 9,
    children: [{
      category: "Accreditation",
      value: 3,
      children: [{
        "category": "Shawna Gentry",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Liliana Jensen",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Riddle Lang",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }, {
      category: "PHP/Python developers",
      value: 2,
      children: [{
        "category": "Shawna Gentry",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Shawna Gentry",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }, {
      category: "Tribe management ДомКлик",
      value: 1,
      children: [{
        "category": "Shawna Gentry",
        "value": 1,
        "children": [],
        "role": "Tester"
      }]
    }, {
      category: "Не присвоено",
      value: 3,
      children: [{
        "category": "Shawna Gentry",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Liliana Jensen",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Riddle Lang",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }]
  }, {
    category: "Продукты. ЦНС. Финансы",
    value: 132,
    children: [{
      category: "Helpdesk & Telephony",
      value: 1,
      children: [{
        "category": "Shawna Gentry",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }, {
      category: "Java developers Core",
      value: 6,
      children: [{
        "category": "Vaughn Richards",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Poole Harrell",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Clarissa Whitaker",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Gina Glover",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Mercedes Burks",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Clara Andrews",
        "value": 1,
        "children": [],
        "role": "Designer"
      }]
    }, {
      category: "Java developers Web",
      value: 10,
      children: []
    }, {
      category: "Non banking products",
      value: 23,
      children: [{
        "category": "Bridges Ross",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Christian Valenzuela",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Whitaker Conner",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Graham Gregory",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Shaw Powers",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Griffin Guthrie",
        "value": 1,
        "children": [],
        "role": "Tester"
      }]
    }, {
      category: "PHP/Python developers",
      value: 3,
      children: []
    }, {
      category: "Python developers Data",
      value: 2,
      children: []
    }, {
      category: "Python developers Web",
      value: 2,
      children: []
    }, {
      category: "Tribe management ДомКлик",
      value: 1,
      children: []
    }, {
      category: "UX",
      value: 1,
      children: []
    }, {
      category: "Поддержка ЦНС",
      value: 7,
      children: []
    }, {
      category: "ДИТ ДомКлик",
      value: 0,
      children: []
    }, {
      category: "ДомКлик ВСП",
      value: 1,
      children: []
    }, {
      category: "ЕКП. Екатеринбург",
      value: 34,
      children: [{
        "category": "Mae Clements",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Carr Graham",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Colon Gould",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Guerrero Vaughan",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Candace Munoz",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }, {
      category: "ЕКП.Новосибирск",
      value: 7,
      children: []
    }, {
      category: "Не присвоено",
      value: 34,
      children: [{
        "category": "Mae Clements",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Carr Graham",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Colon Gould",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Guerrero Vaughan",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Candace Munoz",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }]
  }, {
    category: "Технологические сервисы и работа с данными",
    value: 43,
    children: [
      {
      "category": "Data analysts",
      "value": 13,
      children: [{
        "category": "Mollie Odom",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Noreen Mccall",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Tania Workman",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Cristina Perry",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Higgins Holcomb",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Stacey Hall",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Hoffman Zamora",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }, {
      "category": "Helpdesk & Telephony",
      "value": 2,
      children: []
    }, {
      "category": "Java developers Core",
      "value": 0,
      children: []
    }, {
      "category": "PHP/Python developers",
      "value": 2,
      children: []
    }, {
      "category": "Python developers Data",
      "value": 3,
      children: []
    }, {
      "category": "Python developers Web",
      "value": 1,
      children: []
    }, {
      "category": "Smart Area",
      "value": 7,
      children: []
    }, {
      "category": "Tribe management ДомКлик",
      "value": 1,
      children: []
    }, {
      "category": "ДИТ ДомКлик",
      "value": 0,
      children: []
    }, {
      "category": "Не присвоено",
      "value": 0,
      children: []
    }]
  }, {
    category: "Физ. сеть ЦИК",
    value: 43,
    children: [{
      category: "Mortgage deal and support",
      value: 16,
      children: [{
        "category": "Houston Melendez",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Olga Delaney",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Leslie Mullen",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Carter Fleming",
        "value": 1,
        "children": [],
        "role": "CJE"
      }]
    }, {
      category: "PHP/Python developers",
      value: 10,
      children: [{
        "category": "Meredith Castro",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Woods Conrad",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Laura Bush",
        "value": 1,
        "children": [],
        "role": "Designer"
      }, {
        "category": "Cash Conner",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Ballard Burt",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Jacobson Mccullough",
        "value": 1,
        "children": [],
        "role": "PO"
      }, {
        "category": "Madeleine Garrett",
        "value": 1,
        "children": [],
        "role": "PO"
      }]
    }, {
      category: "Python developers Web",
      value: 1,
      children: []
    }, {
      category: "Tribe management ДомКлик",
      value: 1,
      children: []
    }, {
      category: "ЕКП.Новосибирск",
      value: 8,
      children: []
    }, {
      category: "Не присвоено",
      value: 7,
      children: []
    }]
  }, {
    category: "Не присвоено",
    value: 170,
    children: [{
      category: "Data analysts",
      value: 3,
      children: []
    }, {
      category: "Helpdesk & Telephony",
      value: 11,
      children: []
    }, {
      category: "IT Security",
      value: 2,
      children: []
    }, {
      category: "Non banking products",
      value: 16,
      children: []
    }, {
      category: "PHP/Python developers",
      value: 1,
      children: []
    }, {
      category: "Python developers Data",
      value: 1,
      children: []
    }, {
      category: "Smart Area",
      value: 1,
      children: []
    }, {
      category: "Tribe management ДомКлик",
      value: 5,
      children: []
    }, {
      category: "UX",
      value: 1,
      children: []
    }, {
      category: "Поддержка ЦНС",
      value: 17,
      children: [{
        "category": "Moses Sparks",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Wilcox Nash",
        "value": 1,
        "children": [],
        "role": "Tester"
      }, {
        "category": "Patti Munoz",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Cameron Weber",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Curry Emerson",
        "value": 1,
        "children": [],
        "role": "Designer"
      }]
    }, {
      category: "Partners workflow",
      value: 15,
      children: [{
        "category": "Decker Manning",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }, {
        "category": "Janelle Whitehead",
        "value": 1,
        "children": [],
        "role": "CJE"
      }, {
        "category": "Potts Stephenson",
        "value": 1,
        "children": [],
        "role": "Team Member"
      }]
    }, {
      category: "Support",
      value: 13,
      children: []
    }, {
      category: "ДИТ ДомКлик",
      value: 17,
      children: []
    }, {
      category: "ЕКП. Екатеринбург",
      value: 1,
      children: []
    }, {
      category: "Не присвоено",
      value: 66,
      children: [
        {
          "category": "Hansen Mayo",
          "value": 1,
          "children": [],
          "role": "PO"
        },
        {
          "category": "Cohen Rice",
          "value": 1,
          "children": [],
          "role": "CJE"
        },
        {
          "category": "Tricia Wade",
          "value": 1,
          "children": [],
          "role": "CJE"
        },
        {
          "category": "Mccall Carlson",
          "value": 1,
          "children": [],
          "role": "Tester"
        }
      ]
    }]
  }]
};
var depth = 1;
var width = window.innerWidth,
  height = window.innerHeight,
  root;
var force = d3.layout.force().linkDistance(depth * 200).charge(-1000).gravity(.05).size([width, height]).on("tick", tick);
var svg = d3.select("svg");
var link = svg.selectAll(".link"),
  node = svg.selectAll(".node");
root = data;
update();

function collapse(node) {
  if (node.children) {
    node.children.forEach(function (item) {
      return collapse(item);
    });
  }

  click(node);
}

collapse(root);

function update() {
  var nodes = flatten(root),
    links = d3.layout.tree().links(nodes); // Restart the force layout.

  force.nodes(nodes).links(links).start(); // Update links.

  link = link.data(links, function (d) {
    return d.target.id;
  });
  link.exit().remove();
  link.enter().insert("line", ".node").attr("class", "link"); // Update nodes.

  node = node.data(nodes, function (d) {
    return d.id;
  });
  node.exit().remove();
  var nodeEnter = node.enter().append("g").attr("class", "node").on("click", click).on('touch', click).call(force.drag);
  nodeEnter.append("circle").attr("r", function (d) {
    return d.value ? Math.sqrt(d.value) * 5 : 0;
  });
  nodeEnter.append("text").attr("dy", function (d) {
    return 1.85 + Math.sqrt(d.value ? d.value : 0) * 0.15 + 'em';
  }).style('font-size', function (d) {
    return 12 + Math.sqrt(d.value) + 'px';
  }).text(function (d) {
    return d.category;
  });
  node.select("circle").style("fill", function (d) {
    return d.role ? ROLES[d.role] : color(d);
  }); //--------------------------------------------------------------------------------------
  //Code here creates pie on each node

  nodeEnter.append('path').style('fill', 'black');

  var Adjust =
    /*#__PURE__*/
    function () {
      _createClass(Adjust, [{
        key: "_skip",
        value: function _skip() {
          return [{
            r: 0,
            d: 0,
            c: '#c6dbef'
          }];
        }
      }]);

      function Adjust(_node) {
        var _this = this;

        _classCallCheck(this, Adjust);

        _defineProperty(this, "_childrenExists", function (i) {
          return i.children && i.children.length || i._children && i._children.length;
        });

        _defineProperty(this, "_getChildren", function (i) {
          return i.children ? i.children : i._children;
        });

        _defineProperty(this, "_main", function (node) {
          var res = null;

          if (_this._childrenExists(node)) {
            res = _.countBy(_this._getChildren(node), 'role');
          } else {
            return _this._skip();
          }

          if (res && Object.keys(res)[0] !== 'undefined') {
            return Object.values(res).map(function (item, index) {
              return {
                r: node.value,
                d: item,
                c: ROLES[Object.keys(res)[index]]
              };
            });
          }

          if (_this._childrenExists(node)) {
            var re = _this._getChildren(node).map(function (item) {
              return new Adjust(item);
            });

            var arr = [];

            _.flatten(re).forEach(function (value) {
              if (value.c && !arr.filter(function (value1) {
                return value1.c === value.c;
              }).length) {
                arr.push({
                  ...value,
                  r: node.value
                });
              }
            });

            return arr;
          }

          return _this._skip();
        });

        return this._main.bind(this, _node)();
      }

      return Adjust;
    }(); // Add one dot in the legend for each name.


  svg.selectAll("mydots").data(Object.values(ROLES)).enter().append("circle").attr("cx", 50).attr("cy", function (d, i) {
    return 50 + i * 40;
  }) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7).style("fill", function (d) {
    return d;
  }); // Add one dot in the legend for each name.

  svg.selectAll("mylabels").data(Object.keys(ROLES)).enter().append("text").attr("x", 70).attr("y", function (d, i) {
    return 50 + i * 40;
  }) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function (d) {
      return ROLES[d];
    }).text(function (d) {
    return d;
  }).attr("text-anchor", "left").style("alignment-baseline", "middle");
  var pie = d3.layout.pie().value(function (d) {
    return d.d;
  });
  var arcs = nodeEnter.selectAll(".arc").data(function (d) {
    var a = new Adjust(d); // console.log(a)

    return pie(a);
  }).enter().append("g").attr("class", function (d) {
    // console.log(d)
    return "arc";
  });
  arcs.append("path").attr("d", function (d) {
    return d3.svg.arc().innerRadius(0).outerRadius(function (a) {
      return Math.sqrt(d.data.r) * 5;
    })(d);
  }) // here the arc function works on every record d of data
    .attr("fill", function (d) {
      return d.data.c;
    }); //--------------------------------------------------------------------------------------
}

function tick() {
  link.attr("x1", function (d) {
    return d.source.x;
  }).attr("y1", function (d) {
    return d.source.y;
  }).attr("x2", function (d) {
    return d.target.x;
  }).attr("y2", function (d) {
    return d.target.y;
  });
  node.attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
}

function color(d) {
  return d._children && d._children.length ? "#3182bd" // collapsed package
    : d.children && d.children.length ? "#c6dbef" // expanded package
      : "black"; // leaf node
} // Toggle children on click.


function click(d) {
  if (d3.event && d3.event.defaultPrevented) return; // ignore drag

  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }

  update();
} // Returns a list of all nodes under the root.


function flatten(root) {
  var nodes = [],
    i = 0;

  function recurse(node) {
    if (!node.id) node.id = ++i;

    if (node.children) {
      node.children.forEach(recurse);
    }

    nodes.push(node);
  }

  recurse(root);
  return nodes;
}
