export function verifyEmailTemplate({ user }: any) {
  return `
    <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Verification</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-100 flex flex-col justify-center my-4 mt-12 p-4">
      <div class="max-w-lg mx-auto">
        <img
          src="/app/assets/logo.png"
          alt="CASBytes"
          class="mx-auto w-auto h-[30px] mb-4 opacity-70"
        />
        <div
          class="bg-slate-200 rounded-sm rounded-t-md border border-slate-300 border-t-2 border-t-blue-500 max-w-xl mx-auto p-8"
        >
          <h1 class="text-lg font-bold">Hi ${user.firstName},</h1>
          <p class="mt-4 text-sm">
            To complete your login, please verify your email:
          </p>
          <button
            class="p-2 rounded-md cursor-pointer bg-blue-600 text-slate-50 block mx-auto text-center mt-6 mb-10"
          >
            <a
              href="https://admin.casbytes.com/verify-email/${user.token}"
              >Verify Email</a
            >
          </button>
          <hr />
          <p class="text-sm">Or copy this link and paste in your browser</p>
          <a
            href="https://admin.casbytes.com/verify-email/${user.token}"
            class="text-sm text-blue-600 underline"
            >https://admin.casbytes.com/verify-email/${user.token}</a
          >
          <div class="mt-4">
            <h1 class="text-xs">Cheers,</h1>
            <p class="text-xs font-bold">The CASBytes team.</p>
          </div>
        </div>
        <div class="flex gap-4 mt-6 justify-center text-slate-500">
          <a href="https://www.linkedin.com/company/casbytes">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/casbytes">
            <i class="fa fa-facebook"></i>
          </a>
        </div>
        <p class="text-center text-sm text-slate-400">
          48c Isa Shado by Halima Road, Kaduna south, Nigeria.
        </p>
      </div>
    </body>
  </html>
    `;
}
