import { blue, green, red } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useMediaQuery } from "@material-ui/core";
import SVGHomeCinema from "../../assets/homeCinema.svg";
import SVGListsToDo from "../../assets/listsToDo.svg";
import SVGSocialGirl from "../../assets/socialGirl.svg";
import { useTranslation } from "react-i18next";

function UserWelcome({ handleOpen, setHandleOpen }) {
  const { t } = useTranslation();
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <AutoRotatingCarousel
        autoplay={true}
        interval={6000}
        mobile={isMobile}
        label={t('Empezar')}
        open={handleOpen.open}
        onClose={() => setHandleOpen(false)}
        onStart={() => setHandleOpen(false)}
        style={{ position: "absolute" }}
      >
        <Slide
          media={

            <img              
              alt="SVGHomeCinema"
              id="SVGHomeCinema"
              src={SVGHomeCinema}
              className={classes.image}

            />

          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title={t('Mira información de peliculas')}
          subtitle={t('Revisa en detalle la información de cualquier pelicula')}
        />
        <Slide
          media={

            <img
              alt="SVGListsToDo"
              id="SVGListsToDo"
              src={SVGListsToDo}
              className={classes.image}

            />
            
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title={t('Crea listas personalizadas')}
          subtitle={t('No solo agrega a favoritas, crea cuantas listas quieras')}
        />
        <Slide
          media={

            <img
              alt="SVGSocialGirl"
              id="SVGSocialGirl"
              src={SVGSocialGirl}
              className={classes.image}
            />
            
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title={t('Comparte lo que te gusta')}
          subtitle={t('Comparte en redes sociales el detalle de las peliculas que te interesan')}
        />
      </AutoRotatingCarousel>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({

  image: {
    width: theme.spacing(20)
  },
}));

export default UserWelcome;
