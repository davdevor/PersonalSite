<% Response.StatusCode = 404 %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>404 Page Not Found</title>
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
    <link href="../Content/bootstrap-theme.css" rel="stylesheet" />
    <link href="../Content/Site.css" rel="stylesheet"/>

</head>
<body style="background-color:#E2E2E2">
    <div class="row">
        
        <div class="col-6 text-center container-fluid">
            <p>Something went wrong</p>
            <button class="rounded download-link mx-auto" onclick="goBack()">Go Back</button>
            <img src ="../Files/nomemory.png"/>
        </div>
    </div>
<script>
function goBack() {
    window.history.back();
}
</script>
</body>
</html>