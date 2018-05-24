<% Response.StatusCode = 500 %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>404 Page Not Found</title>
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
    <link href="../Content/bootstrap-theme.css" rel="stylesheet" />

</head>
<body style="background-color:#E2E2E2">
    <div class="row">
        
        <div class="col-6 text-center container-fluid">
            <p>This is our server it is having some problems right now</p>
            <img src ="../Files/sever-died.png"/>
            <button class="rounded download-link mx-auto" onclick="goBack()">Go Back</button>
        </div>
    </div>
<script>
function goBack() {
    window.history.back();
}
</script>
</body>
</html>
