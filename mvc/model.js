const app = document.getElementById('app');

let respect = 25;
let friends = ['Trevor',
    'Michael',
    'Franklin'
];
let obstacles = ['Yelling Karen',
    'Military Chopper',
    'Bank robbery'
];
let carInventory = ['Bag of cash',
    'Rocket launcher',
    'AK-47',
    'Bullet proof glass'

];

let situation = ['Du møter på Trevor, Hva svarer du?: Hei, Fuck off, ikke si noe',
    'Du møter på Michael: Hei, Fuck off, ikke si noe',
    'Du møter på Franklin: Hei, Fuck off, ikke si noe'

];
randomSituationIndex = Math.floor(Math.random() * situation.length);
