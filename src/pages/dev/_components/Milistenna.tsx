import MilistennaImage from "../_image/milistenna.png";

export const Milistenna = () => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="h-60">
        <img alt="Milistenna Screenshot" src={MilistennaImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Milistenna</h2>
        <p>Misskey リスト・アンテナ管理アプリ</p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-info"
            href="https://github.com/Simirall/milistenna"
            rel="noopener noreferrer"
            target="_blank"
          >
            Repo
          </a>
          <a
            className="btn btn-secondary"
            href="https://milistenna.pages.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            App
          </a>
        </div>
      </div>
    </div>
  );
};
