// Waarom staat dit object hier? 


const users = [
  {
    id: 1,
    login: "Karel.Kleintjes",
    password: "P@ssw0ord!23",
    email: "karel.kleintjes@example.com",
    role: "admin",
    isSuperuser: true,
  },
  {
    id: 2,
    login: "Piet.Pollekes",
    password: "PietP#2024",
    email: " Piet.Pollekes@example.com",
    role: "gebruiker",
    isSuperuser: false,
  },
  {
    id: 5,
    login: "Ann.Streuvels",
    password: "Dev*Ann4499",
    email: "Ann.streuvels@example.com",
    role: "gebruiker",
    isSuperuser: false,
  },
  {
    id: 8,
    login: "els.dotjes",
    password: "EDotjes_!884",
    email: "Els.Dotjes@example.com",
    role: "gebruiker",
    isSuperuser: false,
  },
];



// dit kan niet lukken - de api geeft data terug bij url/user
fetch("https://ex-kerst-2025.onrender.com/")
.then(resultaat => resultaat.json())
.then(gebruiker => {
    console.log(gebruiker);
    
})


// hieronder toon je aan dat je array functions kent, maar deze zijn niet toegepast 
// op de data die we terug krijgen van de API

// JE hebt hieronder trouwens NODE aan het schrijven terwijl we met een client werken. 
const getAllUsers = (req, res) => {
    res.json(users)
}

const checkUser = (req, res) => {
    check_User = users.find(
        (user) => user.login == req.body.login && user.password == req.body.password
    )
    if(check_User) res.json({data: "ok", info:check_User.id})
    else res.status(404).send({data:"user not found"})
}

const changePSW = (req, res) => {
    CH_user = users.find((user) => user.id ==req.body.id)

    if(CH_user) {
        CH_user.password = req.body.password
        res.json({status: "ok", CH_user})
    }
    else{
        res.status(404).json({data: "user not found"})
    }
}

