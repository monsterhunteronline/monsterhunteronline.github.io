<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="../js/mho.js"></script>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" type="text/css" href="../css/mho.css">
<title>MHO FAQ - Set Builder</title>
</head>

<body>
<nav id="navbar" class="w3-sidenav w3-collapse w3-dark-grey w3-large" style="width:200px"></nav>
<div class="w3-container w3-blue-grey w3-top">
    <div class="w3-container w3-left w3-main" style="margin-left:200px">
    <h1><span class="w3-opennav w3-hide-large" onclick="w3_toggle()">☰ </span>
    Set Builder</h1>
    </div>
    <div class="w3-container w3-right w3-hide-small">
    <img src="../images/logo.png">
    </div>
</div>
<div class="w3-main" style="margin-left:200px">
<div class="headerspace">
</div>


<div id="simulator">
        <form  method="post" id="searchform">
        <table id="simtable">
        <tr>
        <td class="buttons">
        <button type="submit" name="armorpiece" value="Helmet" id="helmet_button"><img src="../images/<?php 
        $Image='blank';
        if (isset($_GET['Helmet'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Helmet'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $Image=$row['image'];
        }
        echo $Image;
        ?>.png" class="armorimage"></button> <?php 
        if (isset($_GET['Helmet'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Helmet'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
        }
        echo $ItemName. "(" .$ItemType. ")";
        ?><br><br>
        <button type="submit" name="armorpiece" value="Vambrace" id="vambrace_button"><img src="../images/<?php 
        $Image='blank';
        if (isset($_GET['Vambraces'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Vambraces'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $Image=$row['image'];
        }
        echo $Image;
        ?>.png" class="armorimage"></button> <?php 
        if (isset($_GET['Vambraces'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Vambraces'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
        }
        echo $ItemName. "(" .$ItemType. ")";
        ?><br><br>
        <button type="submit" name="armorpiece" value="Armor" id="armor_button"><img src="../images/<?php 
        $Image='blank';
        if (isset($_GET['Armor'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Armor'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $Image=$row['image'];
        }
        echo $Image;
        ?>.png" class="armorimage"></button> <?php 
        if (isset($_GET['Armor'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Armor'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
        }
        echo $ItemName. "(" .$ItemType. ")";
        ?><br><br>
        <button type="submit" name="armorpiece" value="Waist" id="waist_button"><img src="../images/<?php 
        $Image='blank';
        if (isset($_GET['Waist'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Waist'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $Image=$row['image'];
        }
        echo $Image;
        ?>.png" class="armorimage"></button> <?php 
        if (isset($_GET['Waist'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Waist'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
        }
        echo $ItemName. "(" .$ItemType. ")";
        ?><br><br>
        <button type="submit" name="armorpiece" value="Greaves" id="greaves_button"><img src="../images/<?php 
        $Image='blank';
        if (isset($_GET['Greaves'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Greaves'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $Image=$row['image'];
        }
        echo $Image;
        ?>.png" class="armorimage"></button> <?php 
        if (isset($_GET['Greaves'])) {
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $ID=$_GET['Greaves'];
        $sql="SELECT * FROM armor WHERE id=$ID"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
        }
        echo $ItemName. "(" .$ItemType. ")";
        ?>
        </td>
        <td>
        <div class="search">
        <input type="text" name="search" value="<?php if (isset($_POST['search'])) echo $_POST['search']; ?>" /> 
        <input type="submit" name="submit" value="Search">
        <input type="radio" name="armorbg" value="b" <?php if (isset($_POST['armorbg']) && $_POST['armorbg'] == 'b')  echo ' checked="checked"';?> /> Blademaster
        <input type="radio" name="armorbg" value="g" <?php if (isset($_POST['armorbg']) && $_POST['armorbg'] == 'g')  echo ' checked="checked"';?> /> Gunner
        <input type="radio" name="armorbg" value="" <?php if (isset($_POST['armorbg']) && $_POST['armorbg'] == '')  echo ' checked="checked"';?> /> Both
        </div>
        <div class="results">
        <table>
    <?php
    if(isset($_POST['submit'])){
        $search=$_POST['search'];
    }
        $search=$_POST['search'];
        $piece=$_POST['armorpiece'];
        $bg=$_POST['armorbg'];
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $sql="SELECT * FROM armor WHERE set_name LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skills LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR piece_name LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR chin_skill LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR armor_type LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill1 LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill2 LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill3 LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill4 LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill5 LIKE '%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill1_chin LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill2_chin LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill3_chin LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill4_chin LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%' OR skill5_chin LIKE N'%$search%' AND armor_type LIKE '%$piece%' AND type LIKE '%$bg%'"; 
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        //-create  while loop and loop through result set 
        while($row=mysql_fetch_array($result)){ 
            $ItemName=$row['piece_name']; 
            $SetName=$row['set_name']; 
            $Skills=$row['skills']; 
            $ID=$row['id']; 
            $Level=$row['level'];
            $Type=$row['type'];
            $ArmorType=$row['armor_type'];
            $Image=$row['image'];
            $Skill1=$row['skill1'];
            $Skill1Num=$row['skill1_num'];
            $Skill2=$row['skill2'];
            $Skill2Num=$row['skill2_num'];
            $Skill3=$row['skill3'];
            $Skill3Num=$row['skill3_num'];
            $Skill4=$row['skill4'];
            $Skill4Num=$row['skill4_num'];
            $Skill5=$row['skill5'];
            $Skill5Num=$row['skill5_num'];
        //-display the result of the array 
        echo "<tr onclick='addOrUpdateUrlParam(`" .$ArmorType. "`, " .$ID. ");'>" . "<td>" .$ArmorType. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "(" .$Type. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n"; 
    }
    ?>
    </table>
    </div>
    </td>
    </tr>
    <tr>
    <td colspan="2">
        <table class="skilltable">
        <tr><td>&nbsp;</td></tr>
            <?php 
        //connect  to the database 
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
        //-select  the database to use 
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table 
        mysql_query ("set character_set_client='utf8'"); 
        mysql_query ("set character_set_results='utf8'"); 
        $IDs=array($_GET['Helmet'], $_GET['Vambraces'], $_GET['Armor'], $_GET['Waist'], $_GET['Greaves']);
        $i=0;
        while ($i < 5) {
        $sql="SELECT * FROM armor WHERE id=$IDs[$i]"; 
        $i++;
        //-run  the query against the mysql query function 
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
            $ItemName=$row['piece_name']; 
            $SetName=$row['set_name']; 
            $Skills=$row['skills']; 
            $ID=$row['id']; 
            $Level=$row['level'];
            $Type=$row['type'];
            $ArmorType=$row['armor_type'];
            $Image=$row['image'];
            $Skill1=$row['skill1'];
            $Skill1Num=$row['skill1_num'];
            $Skill2=$row['skill2'];
            $Skill2Num=$row['skill2_num'];
            $Skill3=$row['skill3'];
            $Skill3Num=$row['skill3_num'];
            $Skill4=$row['skill4'];
            $Skill4Num=$row['skill4_num'];
            $Skill5=$row['skill5'];
            $Skill5Num=$row['skill5_num'];
        echo "<tr>" . "<td>" .$ArmorType. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "(" .$Type. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n";
        }
        ?>
        </table>

    </td>
    </tr>
    </table>
        </form> 
</div>

<div id="footer" class="w3-container w3-middle-align w3-hide-small" style="margin-left:200px; margin-right:200px;"></div>
</div>
</body>
</html> 