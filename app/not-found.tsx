import { noto_sans_jp } from "../font";

function NotFoundPage() {
  return (
    <div className="bg-yellow-50 h-screen flex items-center justify-center p-8">
      <div>
        <p
          className={`md:text-3xl text-2xl font-semibold ${noto_sans_jp.className}  mb-6`}
        >
          ページが見つかりません
        </p>
        <p
          className={`md:text-8xl text-8xl font-semibold ${noto_sans_jp.className} w-max mx-auto`}
        >
          404
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
