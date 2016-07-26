<!DOCTYPE html>
<html>

    <head>
        <title>Blog</title>

        <meta id="csrf-token" value="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{ elixir('css/app.css') }}">

    </head>

    <body>

        <div class="container">
            <div class="content">
                <h1>Blog</h1>
            </div>
        </div>

        <script src="{{ elixir('js/app.js') }}"></script>

    </body>
</html>
