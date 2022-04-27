const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/L2f7euZuThLVqGN8J73Gng-1200-80.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://previews.123rf.com/images/elenaphotos21/elenaphotos211311/elenaphotos21131100027/23474930-ein-brachiosaurus-dinosaurier-in-der-natur-durch-grau-bew%C3%B6lkten-nacht-mit-vollmond.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2020/06/Baby-T-Rex-Puppet-with-Orange-Stripe1.jpg"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://lede-admin.blockclubchicago.org/wp-content/uploads/sites/5/2020/07/DY3A4831.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://images.news18.com/ibnlive/uploads/2020/08/1598352276_untitled-design-2020-08-25t161426.862.jpg?im=FitAndFill,width=1200,height=900"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://th-thumbnailer.cdn-si-edu.com/7XIuN_eb62kS-msiBrqtfnac0e8=/1000x750/filters:no_upscale():focal(619x495:620x496)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/de/85/de8562ff-64e6-4a4e-856f-588612600eb3/podokesaurus_restoration.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://excitedcats.com/wp-content/uploads/2021/01/black-norwegian-forest-cat_Elisa-Putti_Shutterstock.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://64.media.tumblr.com/8ad0bb54229fc6cb92edc670ac2c8ca1/tumblr_inline_oc8tpiUZVg1qdikaa_540.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://image.shutterstock.com/image-photo/red-cat-sits-on-background-260nw-1791404954.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://thehappypuppysite.com/wp-content/uploads/2018/10/brown-dog-names-long.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/eb/f8/9debf873800cadf6f7765f75929a303b.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://pbs.twimg.com/media/DDkyQSbXUAEG-Qi.jpg"
    }
  ];

  const petId = pets.forEach((item, index)=>{
    item.id = index+1;
   });
   console.log(pets);

  const renderToDom = (divId, textToRender) => {
    const selectedElement = document.querySelector(divId);
    selectedElement.innerHTML = textToRender;
  }

  const addPetModal = () => {
    const domString = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-pet">
    Add New Pet
    </button>
    <!-- Modal -->
    <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Pet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">
          <form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Name" id="name" aria-label="name" required>
            <label for="name">Pet Name</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Color" id="color" aria-label="color" required>
            <label for="color">Pet Color</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="special Skill" required>
            <label for="specialSkill">Special Skill</label>
          </div>
      
          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="type" aria-label="type" required>
              <option value="">Select a type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="dino">Dino</option>
            </select>
            <label for="type">Type</label>
          </div>

          <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Image URL" id="imageUrl" aria-label="image Url" required>
          <label for="imageUrl">Image Url</label>
        </div>
          
      
          <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>`


    renderToDom('#addNewPetContainer', domString);
  }

  const cardsOnDom = (array) => {
    let domString = '';
    for (const item of array) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="${item.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.color}</p>
        <p class="card-text">${item.specialSkill}</p>
        <p class="card-text">${item.type}</p>
      </div>
      <div>
      <button class="btn btn-danger" id="delete--${item.id}">X Delete Pet</button>
      </div>
    </div>`
    renderToDom('#cardContainer', domString);
    }};

const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector('#add-pet'));
  document.querySelector('#top-buttons').addEventListener('click', (e) => {
    if (e.target.id === "all-button") {
      cardsOnDom(pets);
    } else if (e.target.id === "dog-button") {
      const dogFilter = pets.filter(doggo => doggo.type === "dog");
      cardsOnDom(dogFilter);
    } else if (e.target.id === "cat-button") {
      const catFilter = pets.filter(kitty => kitty.type === "cat");
      cardsOnDom(catFilter);
    } else if (e.target.id === "dino-button") {
      const dinoFilter = pets.filter(dinosaur => dinosaur.type === "dino");
      cardsOnDom(dinoFilter);
    }
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPetObj = {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imageUrl").value,
    }
    pets.push(newPetObj);
    cardsOnDom(pets);
    formModal.hide();
    form.reset();
  });

  document.querySelector('#cardContainer').addEventListener('click', (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split("--");
      const index = pets.findIndex((petIndex) => petIndex.id === parseInt(id))
      if (e.target.id.includes('delete')) {
        pets.splice(index, 1);
        cardsOnDom(pets);
      }
    }
  });
}
  

  const startApp = () => {
    addPetModal();
    cardsOnDom(pets);
    eventListeners();
  };

  startApp();
