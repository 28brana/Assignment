import { CardProps } from "../interface/card.interface";

const Card = ({ avatar, totalAmount, price, pl, pairs }: CardProps) => {
  return (
    <div className="card gap-2 ">
      <div className="card__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <p className="mt-16 text-secondary">Bitcoint(BTC)</p>
      <div className="card__detail gap-2">
        <p className="text-primary">${totalAmount.toLocaleString('en-US')}</p>
        <p className={pl >=0 ?"text-success":"text-warning"}>{pl>0 && '+'}{pl}%</p>
      </div>
      <p className="text-secondary ">Bitcoint(BTC)</p>
      <div className="card__detail">
        <p className="text-primary">${price.toLocaleString('en-US')}</p>
      </div>
      <p className="text-secondary">TVL</p>
      <div className="[width:120px] py-2 text-center rounded-full [background:#14172B] flex items-center justify-evenly">
        {
            pairs.map((element,index)=>(
                <img className="card__thumbnail" src={element} alt="avatar" key={index}/>
            ))
        }
      </div>
      <p className="text-secondary">Popular pairs</p>
    </div>
  );
};

export default Card;
