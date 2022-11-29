<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Könyváruház</title>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <meta name="csrf-token" content=<?php $token = csrf_token();
                                    echo $token; ?>>
    <link rel="stylesheet" href="/../css/style.css" />
    <link rel="stylesheet" href="/../css/konyvAdmin.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/../js/main.js" type="module"></script>


</head>

<body>
    <h1>KÖNYVEK NEKED Webáruház</h1>


    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item" id="public">
                    <a class="nav-link active" href="#">Public</a>
                </li>
                <li class="nav-item" id="admin">
                    <a class="nav-link" href="#">Admin</a>
                </li>

            </ul>
        </div>
    </nav>
    <main></main>
</body>

</html>
