<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Home</h2>    
	  <div id="building"></div>
    <div class="d-flex justify-content-around">
      <!-- will add the icons later as BG image -->
      <div id="elevator-1" class="elevator" data-floor="0">Lift 1</div>
      <div id="elevator-2" class="elevator" data-floor="0">Lift 2</div>
      <div id="elevator-3" class="elevator" data-floor="0">Lift 3</div>
      <div id="elevator-4" class="elevator" data-floor="0">Lift 4</div>
    </div>	
  </div>
  <script src="script.js"></script>
</body>
</html>
