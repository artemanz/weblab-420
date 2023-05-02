import { bigManDark, bigManLight, girl, man } from "@/assets/images";
import c from "./styles.module.scss";
import { MotionProps, motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import themeContext from "@/theme";

type Props = {};

const animations: { [key: string]: MotionProps } = {
  slideFromLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { ease: "easeOut" },
  },
  slideFromRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: 1 },
  },
  typingStart: {
    animate: { scale: [1, 1.25, 1] },
    transition: { repeat: Infinity, ease: "linear", duration: 1 },
  },
  typingMiddle: {
    animate: { scale: [1, 1.25, 1] },
    transition: { repeat: Infinity, ease: "linear", duration: 1, delay: 0.5 },
  },
};

const Chat = (props: Props) => {
  const { theme } = useContext(themeContext);
  const [animationEnd, setAnimationEnd] = useState(false);

  const clientMessage = useRef(null);
  const businessMessage = useRef(null);
  const isClientInView = useInView(clientMessage, { once: true });
  const isBusinessInView = useInView(businessMessage, { once: true });

  return (
    <section className={c.section} id="chat">
      <div className={c.container}>
        <div className={c.sectionBg} />
        <div className={c.messages}>
          <motion.div
            ref={clientMessage}
            {...animations.slideFromLeft}
            animate={isClientInView ? animations.slideFromLeft.animate : {}}
            className={c.messageFromClient}
          >
            <img className={c.avatar} src={girl} alt="Client avatar" />
            <div className={c.messageBox}>
              <p className={c.messageText}>
                Почему я должна выбрать именно вас?
              </p>
              <small className={c.messageTime}>16:20</small>
            </div>
          </motion.div>

          <div className={c.messageFromBusiness}>
            <figure className={c.avatar}>
              <img src={man} alt="Client avatar" />
            </figure>
            <figure className={c.desktopAvatar}>
              <img
                src={theme == "dark" ? bigManDark : bigManLight}
                alt="Client avatar"
              />
            </figure>
            <motion.div
              ref={businessMessage}
              {...animations.slideFromRight}
              animate={
                isBusinessInView ? animations.slideFromRight.animate : {}
              }
              className={c.messageBox}
            >
              <p className={c.messageText}>
                Стоимость разработки и обязательства зафиксированы в договоре.
              </p>
              <small className={c.messageTime}>16:21</small>
            </motion.div>
            <motion.div
              {...animations.slideFromRight}
              animate={
                isBusinessInView ? animations.slideFromRight.animate : {}
              }
              transition={{ delay: 2 }}
              className={c.messageBox}
            >
              <p className={c.messageText}>
                Вы можете вносить правки на любом этапе разработки.
              </p>
              <small className={c.messageTime}>16:22</small>
            </motion.div>
            <motion.div
              {...animations.slideFromRight}
              animate={
                isBusinessInView ? animations.slideFromRight.animate : {}
              }
              transition={{ delay: 3 }}
              className={c.messageBox}
            >
              <p className={c.messageText}>
                Мы предоставляем гарантию на оказанные услуги.
              </p>
              <small className={c.messageTime}>16:23</small>
            </motion.div>
            <motion.div
              {...animations.slideFromRight}
              animate={
                isBusinessInView ? animations.slideFromRight.animate : {}
              }
              transition={{ delay: 4 }}
              className={c.messageBox}
            >
              <p className={c.messageText}>
                Система основана на опыте продвижения сотен бизнесов.
              </p>
              <small className={c.messageTime}>16:24</small>
            </motion.div>
            <motion.div
              {...animations.slideFromRight}
              animate={
                isBusinessInView ? animations.slideFromRight.animate : {}
              }
              transition={{ delay: 5 }}
              className={c.messageBox}
              onAnimationComplete={() => setAnimationEnd(true)}
            >
              <p className={c.messageText}>
                Запускаем проект сами, вы принимаете готовый результат.
              </p>
              <small className={c.messageTime}>16:25</small>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isBusinessInView ? { opacity: 1 } : undefined}
          className={c.typing}
        >
          <p className={c.typingTitle}>weblab 420</p>
          <div className={c.typingBox}>
            {animationEnd ? (
              <p>online</p>
            ) : (
              <>
                <div className={c.typingDots}>
                  <motion.div {...animations.typingStart}></motion.div>
                  <motion.div {...animations.typingMiddle}></motion.div>
                  <motion.div {...animations.typingStart}></motion.div>
                </div>
                <p>typing</p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chat;
