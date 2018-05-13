const {plus, minus} = require('./choices')
const info = require('../index')

module.exports = [
  info,
  {  
   text:'Ég hef líflegt ímyndunarafl',
   choises:plus,
   domain:'O'
  },
  {  
     text:'Ég tel að list sé mikilvæg',
     choises:plus,
     domain:'O'
  },
  {  
     text:'Ég verð sjaldan niðurdregin/n',
     choises:minus,
     domain:'N'
  },
  {  
     text:'Ég er orðhvöss/orðhvass',
     choises:minus,
     domain:'A'
  },
  {  
     text:'Ég hef ekki áhuga á abstrakt hugmyndum',
     choises:minus,
     domain:'O'
  },
  {  
     text:'Ég á erfitt með að koma mér að verki',
     choises:minus,
     domain:'C'
  },
  {  
     text:'Ég verð auðveldlega örvæntingafull(ur)',
     choises:plus,
     domain:'N'
  },
  {  
     text:'Ég á það til að kjósa frjálslynda stjórnmálamenn',
     choises:plus,
     domain:'O'
  },
  {  
     text:'Ég læt ekki léttilega angra mig', 
     choises: minus, 
     domain: 'N'
  },
  {  
     text:'Ég á auðvelt með að eignast vini',
     choises:plus,
     domain:'E'
  },
  {  
     text:'Ég er oft niðurdregin/n',
     choises:plus,
     domain:'N'
  },
  {  
     text:'Ég klára húsverk strax',
     choises:plus,
     domain:'C'
  },
  {  
     text:'Ég gruna aðra um græsku',
     choises:minus,
     domain:'A'
  },
  {  
     text:'Ég verð sjaldan pirruð/pirraður',
     choises:minus,
     domain:'N'
  },
  {  
     text:'Ég hef ekki áhuga á list', 
     choises: minus, 
     domain: 'O'
  },
  {  
     text:'Mér líkar illa við sjálfa/n mig',
     choises:plus,
     domain:'N'
  },
  {  
     text:'Ég held mig til hlés',
     choises:minus,
     domain:'E'
  },
  {  
     text:'Ég geri bara það sem þarf en ekkert umfram það',
     choises:minus,
     domain:'C'
  },
  {  
     text:'Ég er ávallt reiðubúin/n', 
     choises: plus, 
     domain: 'C'
  },
  {  
     text:'Ég á það til að kjósa íhaldssama stjórnmálamenn',
     choises:minus,
     domain:'O'
  },
  {  
     text:'Ég er sátt/ur í eigin skinni',
     choises:minus,
     domain:'N'
  },
  {  
     text:'Ég forðast heimspekilegar umræður',
     choises:minus,
     domain:'O'
  },
  {  
     text:'Ég sóa tíma mínum',
     choises:minus,
     domain:'C'
  },
  {  
     text:'Ég trúi að aðrir vilji vel',
     choises:plus,
     domain:'A'
  },
  {  
     text:'Ég er mjög ánægður með sjálfan mig',
     choises:minus,
     domain:'N'
  },
  {  
     text:'Ég hef lítið til málanna að leggja',
     choises:minus,
     domain:'E'
  },
  {  
     text:'Mér líður vel innan um fólk',
     choises:plus,
     domain:'E'
  },
  {  
     text:'Ég er oft þung/ur á mér',
     choises:plus,
     domain:'N'
  },
  {  
     text:'Ég hef ekki gaman af listasöfnum',
     choises:minus,
     domain:'O'
  },
  {  
     text:'Ég hef tíðar skapsveiflur',
     choises:plus,
     domain:'N'
  },
  {  
     text:'Ég vil síður vekja athygli á mér',
     choises:minus,
     domain:'E'
  },
  {  
     text:'Ég móðga fólk',
     choises:minus,
     domain:'A'
  },
  {  
     text:'Ég hef eitthvað gott að segja um alla',
     choises:plus,
     domain:'A'
  },
  {  
     text:'Ég næ mér niður á öðrum',
     choises:minus,
     domain:'A'
  },
  {  
     text:'Ég fylgi eftir áætlunum mínum',
     choises:plus,
     domain:'C'
  },
  {  
     text:'Ég myndi lýsa reynslum mínum sem heldur óspennandi',
     choises:minus,
     domain:'E'
  },
  {  
     text:'Ég kem samræðum á hærra stig',
     choises:plus,
     domain:'O'
  },
  {  
     text:'Ég klára ekki það sem ég byrja á',
     choises:minus,
     domain:'C'
  },
  {  
     text:'Ég er með góða félagsfærni',
     choises:plus,
     domain:'E'
  },
  {  
     text:'Ég ber virðingu fyrir öðrum',
     choises:plus,
     domain:'A'
  },
  {  
     text:'Ég veiti smáatriðum athygli',
     choises:plus,
     domain:'C'
  },
  {  
     text:'Ég er hrókur alls fagnaðar',
     choises:plus,
     domain:'E'
  },
  {  
     text:'Ég hef gaman af því að heyra nýjar hugmyndir',
     choises:plus,
     domain:'O'
  },
  {  
     text:'Ég tek fólki eins og það er',
     choises:plus,
     domain:'A'
  },
  {  
     text:'Ég tala ekki mikið',
     choises:minus,
     domain:'E'
  },
  {  
     text:'Ég brýt aðra niður',
     choises:minus,
     domain:'A'
  },
  {  
     text:'Ég geri áætlanir og fylgi þeim',
     choises:plus,
     domain:'C'
  },
  {  
     text:'Ég veit hvernig á að hrífa fólk',
     choises:plus,
     domain:'E'
  },
  {  
     text:'Ég læt fólki líða vel',
     choises:plus,
     domain:'A'
  },
  {  
     text:'Ég forðast skyldur mínar',
     choises:minus,
     domain:'C'
  }
]
