import { useEffect, useState } from "react";
import SEO from "src/seo";

const Opener = () => {
  const title = "Opener";
  const [link, setLink] = useState("");
  useEffect(() => {
    setLink(document.referrer);
  }, []);
  return (
    <>
      <SEO title={title} />
      {link && (
        <>
          <h1>UWAGA!</h1>
          <div>
            Twoja poprzednia strona z której korzystałeś, nie ustawaiła sobie
            'bezpiecznych linków', przez co sobie podmieniłem url tej strony!
            <br />
            <br />
            Ciesz się, że trafiłeś akurat tutaj i nic ci nie grozi ;)
            <br />
            <br />
            Także teraz uważaj, jak klikasz w inne linki na tej stronie ta
            której byłeś, bo mogą one podmienić url strony na jakiś inny
            (podobny do jakiejś znanej strony np. facabook.com) i choć w wyglądu
            ta strona może przypominać prawdziwą strone facebooka to, pewnie
            będzie cie prosić o ponowne zalogowanie przez co skradnie twoje dane
            do logowania !
          </div>
        </>
      )}
    </>
  );
};

export default Opener;

export const getStaticProps = () => {
  return { props: {} };
};
