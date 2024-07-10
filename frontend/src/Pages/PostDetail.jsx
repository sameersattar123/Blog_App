import React from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link } from "react-router-dom";
import thumbnail from "../assets/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post_detail">
      <div className="container post_detail_container">
        <div className="post_detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={"/posts/dfcdcf/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/dfcdcf/edit"} className="btn sm danger">
              Deletw
            </Link>
          </div>
        </div>
        <h1>This is a post title</h1>
        <div className="post_detail_thumbnail">
          <img src={thumbnail} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum
          nemo est praesentium possimus perferendis voluptate quam et ea sequi,
          dolor ullam necessitatibus minus odio cumque! At illum soluta vitae
          beatae vero officiis dolorum hic sit facilis, quia totam neque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          blanditiis qui est voluptas doloremque culpa praesentium ipsam
          accusantium. Odio ad ipsum vitae, harum ullam enim. Quo suscipit sit,
          officiis molestiae odio aspernatur id iste hic et, nisi sapiente quis
          ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
          commodi nostrum. Numquam quam debitis unde tenetur facere provident
          pariatur distinctio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia
          est illo, aut nulla unde temporibus libero placeat enim qui excepturi
          perspiciatis ipsam tenetur, eos, veritatis quidem consectetur dolore
          magnam laudantium vitae? Reiciendis eius illo ex obcaecati dignissimos
          autem est in asperiores fugit enim velit nisi minus facere itaque
          deleniti error dolore eum laudantium reprehenderit excepturi
          cupiditate omnis, accusamus facilis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eius.
          Quos commodi incidunt ipsam nostrum non. Sit neque nobis in non minus
          veniam animi nulla voluptatum tempora corporis, similique molestiae
          fugit, asperiores quasi omnis architecto? Corporis ab distinctio in
          quia, quas sed? Sint delectus dolorem, repellat sunt illum commodi!
          Nemo pariatur ducimus, modi odio sapiente saepe quasi et enim
          provident eius dolorem aut quaerat magni illo? Ad aut optio totam quod
          omnis. Eveniet iusto voluptates tempora voluptatum autem veritatis
          molestias laudantium rerum explicabo cum officia fugiat praesentium
          culpa eum repudiandae quam accusantium repellendus, blanditiis, ipsum
          minima optio tenetur aliquid ad. Impedit ut quisquam error eum ipsa
          obcaecati facilis aliquid distinctio veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          nemo vel atque provident, minima laborum ullam facilis dolorum dicta
          autem voluptatem natus et amet consequatur fugiat tenetur illum omnis
          assumenda harum deserunt nihil expedita iste sunt. Neque voluptates
          ullam reprehenderit iste optio aperiam? Quas dignissimos blanditiis
          eos iure libero. Molestias illo ratione officia dolor at natus omnis
          perferendis itaque beatae quidem numquam repellendus eum id,
          laudantium odit, quisquam quos nam atque aliquid. Inventore ratione
          eius, obcaecati aspernatur sequi maxime incidunt molestiae deleniti
          facere adipisci accusamus voluptates sunt numquam? Est in voluptate
          fuga quae vitae? Mollitia, earum saepe. Minima illo ullam odit, eius
          cum laborum laudantium cumque harum obcaecati autem rem expedita
          ducimus vitae corporis exercitationem quos quasi aperiam reprehenderit
          est, accusantium nesciunt pariatur! Amet odio fugiat ullam ipsum
          impedit, eius esse deleniti numquam, distinctio quibusdam, magni
          temporibus assumenda officiis animi odit ex obcaecati error mollitia
          dolores rem molestias modi. Veniam, explicabo! Ut adipisci, debitis
          minus veritatis numquam reiciendis voluptate neque veniam, autem
          facilis dolores error vitae eius sunt, impedit excepturi possimus
          aliquid a! Dolorum voluptate excepturi, provident aspernatur a ullam
          nesciunt, corrupti rerum harum exercitationem est quae minima esse
          illo placeat explicabo quam, amet officiis sit modi voluptatibus enim
          totam!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
