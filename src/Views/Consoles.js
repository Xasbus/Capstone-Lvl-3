import React, { useEffect } from "react";
import { NavBar } from "./NavBar";
import { output } from "../utils/output";
import { cardConverter } from "../modules/cardConverter";

export function Consoles() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <img
          title="PS5"
          alt="consoles"
          width="100%"
          height="100px"
          src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/8ea6b726-4ea9-405a-98a6-3bef3603b87d.image.png?v=1722103725076"
        />
        <h1>PlayStation Consoles</h1>
        <a id="playstation5"></a>
        <article>
          <a id="playstation5"></a>
          <output id="outputTag"></output>
        </article>
        <br />
        <br />
        <br />
      </main>
      <footer>
        <div width="100%">
          <div className="row">
            <div className="col">
              <a href="#playstation5">PlayStation 5</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="#playstation4">PlayStation 4</a>
            </div>
          </div>
          <div>
            <div className="col">
              <a href="#playstationvr">PlayStation VR2</a>
            </div>
          </div>
        </div>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );

  function componentDidUpdate() {
    function cardConverter(cardObject) {
      let cardString = `<div class="card">
      <img class="card-img-top" src="${cardObject.src}">
      <div class="card-body">
      <h3 class="card-title">${cardObject.title}</h3>
      ${cardObject.summary}
      </div>
      </div>`;
      return cardString;
    }
  }

  function componentDidMount() {
    const cardObject1 = {};
    cardObject1.src =
      "https://media.direct.playstation.com/is/image/sierialto/PS5-Disc-Slim-New-Hero-1?$Background_Large$";
    cardObject1.title = "PlayStation 5";
    cardObject1.summary = `<p>
                            Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.
                        </p>
                        <p>
                            Tristique cubilia nostra penatibus bibendum quis placerat. Lobortis velit posuere elementum ullamcorper laoreet. Maximus facilisi massa amet; congue consectetur litora. Sollicitudin elit purus natoque, tempus tincidunt quam pulvinar? Dui volutpat urna
                            ante tristique nascetur. Praesent nam tortor sollicitudin congue interdum vehicula adipiscing. Vivamus congue magnis molestie aliquam mattis aliquet in aliquam. Molestie vel laoreet enim accumsan viverra varius quam; placerat
                            integer. Habitant enim tempus accumsan; senectus penatibus lorem egestas bibendum. Torquent vulputate himenaeos pretium lacinia erat magnis torquent.
                        </p>`;

    const cardObject2 = {};
    cardObject2.src =
      "https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-image-block-01-en-24jul20?$1600px--t$";
    cardObject2.title = "PlayStation 4";
    cardObject2.summary = `<p>
                            Ornare sem class magnis in consectetur consequat sed aliquam. Aenean proin sociosqu ornare pharetra lacus. Dictum convallis venenatis potenti proin pretium tincidunt dui ad interdum. Nascetur aenean fermentum est risus, neque iaculis.
                            <span>Semper sodales morbi nam ullamcorper sociosqu natoque a lacus.
                            </span> Ipsum torquent ultricies ac vivamus, vivamus felis. Augue scelerisque curabitur mauris hac feugiat potenti id. Eu consequat tempor velit tristique mauris leo id fames.
                        </p>
                        <p>
                            Cras sodales venenatis ac platea aliquam dictum eleifend. Parturient erat pulvinar inceptos dis nostra viverra luctus suscipit. Ultricies nisl placerat dis primis amet posuere porttitor nibh. Bibendum iaculis ante et; quisque metus phasellus. Habitasse
                            venenatis ligula cubilia ante tortor pharetra quis. Elit vehicula elit fringilla tristique vel sapien tristique. Consequat aliquet dignissim porta suspendisse taciti porta taciti maximus lacus. Sed platea rhoncus in magnis
                            nulla. Morbi taciti lobortis feugiat lacus varius ridiculus nisi turpis.
                        </p>
                        <p>
                            Molestie sit vulputate ridiculus lorem sollicitudin lacinia scelerisque laoreet. Nascetur pellentesque non consectetur duis luctus litora egestas venenatis nibh. Etiam iaculis non habitasse penatibus ex commodo. Tellus etiam cras blandit; libero interdum
                            diam venenatis. Ut blandit justo eu magnis ridiculus litora posuere. Natoque magnis justo tempus; curabitur maximus dictum. Litora congue eget porta volutpat cursus lectus; dictumst suscipit. In cursus sapien penatibus; eleifend
                            vivamus maximus?
                        </p>`;

    const cardObject3 = {};
    cardObject3.src =
      "https://th.bing.com/th/id/OIP.y_Z4aw_Mlmv2zwIpOshDcwHaEK?w=202&h=113&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    cardObject3.title = "PlayStation VR";
    cardObject3.summary = `<p>
                            Dictum senectus convallis tortor sed tincidunt maecenas consectetur luctus ex. Ad in mi eu turpis class. Potenti posuere vehicula praesent tellus himenaeos. Eget aliquam augue diam tempus magnis vehicula porta. Nisl mollis etiam quam phasellus nisl. Platea
                            et nisi pellentesque; vel morbi leo. Tortor sociosqu senectus rutrum; est primis nibh ex. Gravida dictumst habitant orci faucibus mus cras. Taciti fames iaculis sociosqu magna cras lobortis.
                        </p>
                        <p>
                            Netus porta dignissim fames, conubia fames nunc. Rhoncus nibh metus lobortis facilisi quisque maximus, elit quis tristique. Tempor tristique curabitur condimentum volutpat quis sociosqu id. Habitasse mi phasellus maximus sapien aenean ad consectetur.
                            Id vivamus felis est a eros. Facilisis pulvinar senectus nascetur nostra vel non tincidunt lectus. Diam ultrices nascetur himenaeos tincidunt, laoreet interdum nam!
                        </p>`;

    const cardArray = [cardObject1, cardObject2, cardObject3];
    for (let position = 0; position < cardArray.length; position++) {
      output("<section class='p-5'>");
      const cardObject = cardArray[position];
      const stringCard = cardConverter(cardObject);
      output(stringCard);
      output("</section>");
    }
  }

  function componentDidUnmount() {
    console.log("Component Unmounted in Console Page");
  }
}
