export const InfoCard = () => {
  return (
    <div className="card image-full max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img alt="Shoes" src="/mirai1.avif" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">しみらー / Simirall</h2>
        <div className="chat chat-end">
          <li className="chat-bubble chat-bubble-neutral">Sapporo, Hokkaido</li>
        </div>
        <div className="chat chat-start">
          <li className="chat-bubble chat-bubble-accent">Web Engineer</li>
        </div>
        <div className="chat chat-end">
          <li className="chat-bubble chat-bubble-secondary">Frontend, React</li>
        </div>
        <div className="chat chat-start">
          <li className="chat-bubble chat-bubble-info">Illustration</li>
        </div>
        <div className="chat chat-end">
          <li className="chat-bubble chat-bubble-success">SNS</li>
        </div>
      </div>
    </div>
  );
};
