import "./ProductCard.css";

export default function ProductCard(values) {
  let stars = [];
  for (let i = 0; i < Number(values.item.rating.rate); i++) {
    stars[i] = 1;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={values.item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-nowrap overflow-hidden">
          {values.item.title}
        </h5>
        <p className="card-text text-uppercase">{values.item.category}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text"> &#8377; {values.item.price}</p>
          <div className="d-flex">
              <p className="stars">
                  {stars.map((x) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
              </p>
              <span className="ms-2">{values.item.rating.count}</span>
          </div>
        </div>
        <p className="card-text text-nowrap overflow-hidden">
          {values.item.description}
        </p>
        <a href="#" className="btn btn-success flex-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-plus"
            viewBox="0 0 16 16"
          >
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <span className="ms-2">Cart</span>
        </a>
      </div>
    </div>
  );
}
