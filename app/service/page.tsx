import css from "./services.module.css"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="box">
      <h1>Our Services</h1>
      <div className={css.container}>
        <h2>
          <Link href="/service/web-designing">Web Designing</Link></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae minima officiis accusamus voluptatum? Dolorum, recusandae.</p>
      </div>
      <div className={css.container}>
        <h2>
          <Link href="/service/graphic-designing">Graphic Designing</Link></h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi inventore, animi a ipsa vero.</p>
      </div>
      <div className={css.container}>
        <h2>
          <Link href="/service/content-writing">Content Writing</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut tempore fuga cum quasi aliquam magnam.</p>
      </div>
    </div>
  );
}