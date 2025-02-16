import s from './MainFooter.module.css';

function MainFooter() {
  return (
    <footer className={s.footer}>
      <p className={s.footer__text}>Footer</p>
      <p className={s.footer__copyright}>2025</p>
    </footer>
  );
}

export default MainFooter;
