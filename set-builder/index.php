<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
<script src="../json/navigation.json"></script>
<script src="../json/armor.json"></script>
<script src="../json/material.json"></script>
<script src="../json/other.json"></script>
<script src="../js/mho.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" type="text/css" href="../css/mho.css">
<title>MHO FAQ - Armor</title>
</head>

<body onload="navbarContent(); footerContent(); cookieState();">
<nav id="navbar" class="w3-sidenav w3-collapse w3-dark-grey w3-large" style="width:200px"></nav>
<div class="w3-container w3-blue-grey w3-top">
    <div class="w3-container w3-left w3-main" style="margin-left:200px">
    <h1><span class="w3-opennav w3-hide-large" onclick="w3_toggle()">☰ </span>
    Armor</h1>
    </div>
    <div class="w3-container w3-right w3-hide-small">
    <img src="../images/logo.png">
    </div>
</div>
<div class="w3-main" style="margin-left:200px">
<div class="headerspace">
</div>


<div id="simulator">
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div id="helmet" class="w3-col l7 m11 s11">
<div class="infocontainer" id="helmet_button">
    <?php 
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
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
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
        echo "<img src='../images/" .$Image. ".png' class='armorimage'></div><div class='infocontainer w3-container'><table class='helmettable'><tr><td>" .$ItemName. "(" .$ItemType. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr></table>";
    }
        ?>
</div>
</div>
<div class="w3-col l1 m1 s1 helmetbutton"><img src="../images/simulator/simu-icon-add.gif" style="width:21px;"></div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l12 m12 s12 infosection">
<div id="helmetselection"  class="results w3-col l12 m12 s12">
<table>
<?php
    //connect  to the database 
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
    //-select  the database to use 
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table 
    mysql_query ("set character_set_client='utf8'"); 
    mysql_query ("set character_set_results='utf8'"); 
    $sql="SELECT * FROM armor WHERE armor_type='Helmet'";
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
    echo "<tr><td><img onclick='addOrUpdateUrlParam(`" .$ArmorType. "`, " .$ID. ");' src='../images/simulator/simu-icon-add.gif' style='width:21px;'></td><td class='type" .$Type. "'>(" .$Type. ")</td><td>" .$Level. "</td><td>" .$SetName. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n";

    }
    mysql_close();
?>
</table>
</div>
</div></div>
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div id="vambraces" class="w3-col l7 m11 s11">
<div class="infocontainer" id="vambraces_button">
    <?php 
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
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
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
        echo "<img src='../images/" .$Image. ".png' class='armorimage'></div><div class='infocontainer w3-container'><table class='vambracestable'><tr><td>" .$ItemName. "(" .$ItemType. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr></table>";
    }
        ?>
</div>
</div>
<div class="w3-col l1 m1 s1 vambracesbutton"><img src="../images/simulator/simu-icon-add.gif" style="width:21px;"></div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l12 m12 s12 infosection">
<div id="vambracesselection" class="results w3-col l12 m12 s12">
<table>
<?php
    //connect  to the database 
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
    //-select  the database to use 
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table 
    mysql_query ("set character_set_client='utf8'"); 
    mysql_query ("set character_set_results='utf8'"); 
    $sql="SELECT * FROM armor WHERE armor_type='Vambraces'";
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
    echo "<tr><td><img onclick='addOrUpdateUrlParam(`" .$ArmorType. "`, " .$ID. ");' src='../images/simulator/simu-icon-add.gif' style='width:21px;'></td><td class='type" .$Type. "'>(" .$Type. ")</td><td>" .$Level. "</td><td>" .$SetName. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n";

    }
    mysql_close();
?>
</table>
</div>
</div></div>
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div id="armor" class="w3-col l7 m11 s11">
<div class="infocontainer" id="armor_button">
    <?php 
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
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
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
        echo "<img src='../images/" .$Image. ".png' class='armorimage'></div><div class='infocontainer w3-container'><table class='armortable'><tr><td>" .$ItemName. "(" .$ItemType. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr></table>";
    }
        ?>
</div>
</div>
<div class="w3-col l1 m1 s1 armorbutton"><img src="../images/simulator/simu-icon-add.gif" style="width:21px;"></div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l12 m12 s12 infosection">
<div id="armorselection" class="results w3-col l12 m12 s12">
<table>
<?php
    //connect  to the database 
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
    //-select  the database to use 
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table 
    mysql_query ("set character_set_client='utf8'"); 
    mysql_query ("set character_set_results='utf8'"); 
    $sql="SELECT * FROM armor WHERE armor_type='Armor'";
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
    echo "<tr><td><img onclick='addOrUpdateUrlParam(`" .$ArmorType. "`, " .$ID. ");' src='../images/simulator/simu-icon-add.gif' style='width:21px;'></td><td class='type" .$Type. "'>(" .$Type. ")</td><td>" .$Level. "</td><td>" .$SetName. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n";

    }
    mysql_close();
?>
</table>
</div>
</div></div>
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div id="waist" class="w3-col l7 m11 s11">
<div class="infocontainer" id="waist_button">
    <?php 
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
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
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
        echo "<img src='../images/" .$Image. ".png' class='armorimage'></div><div class='infocontainer w3-container'><table class='waisttable'><tr><td>" .$ItemName. "(" .$ItemType. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr></table>";
    }
        ?>
</div>
</div>
<div class="w3-col l1 m1 s1 waistbutton"><img src="../images/simulator/simu-icon-add.gif" style="width:21px;"></div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l12 m12 s12 infosection">
<div id="waistselection" class="results w3-col l12 m12 s12">
<table>
<?php
    //connect  to the database 
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
    //-select  the database to use 
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table 
    mysql_query ("set character_set_client='utf8'"); 
    mysql_query ("set character_set_results='utf8'"); 
    $sql="SELECT * FROM armor WHERE armor_type='Waist'";
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
    echo "<tr><td><img onclick='addOrUpdateUrlParam(`" .$ArmorType. "`, " .$ID. ");' src='../images/simulator/simu-icon-add.gif' style='width:21px;'></td><td class='type" .$Type. "'>(" .$Type. ")</td><td>" .$Level. "</td><td>" .$SetName. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n";

    }
    mysql_close();
?>
</table>
</div>
</div></div>
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div id="greaves" class="w3-col l7 m11 s11">
<div class="infocontainer" id="greaves_button">
    <?php 
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
        $ItemName=$row['piece_name']; 
        $ItemType=$row['type']; 
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
        echo "<img src='../images/" .$Image. ".png' class='armorimage'></div><div class='infocontainer w3-container'><table class='greavestable'><tr><td>" .$ItemName. "(" .$ItemType. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr></table>";
    }
        ?>
</div>
</div>
<div class="w3-col l1 m1 s1 greavesbutton"><img src="../images/simulator/simu-icon-add.gif" style="width:21px;"></div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l12 m12 s12 infosection">
<div id="greavesselection" class="results w3-col l12 m12 s12">
<table>
<?php
    //connect  to the database 
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error()); 
    //-select  the database to use 
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table 
    mysql_query ("set character_set_client='utf8'"); 
    mysql_query ("set character_set_results='utf8'"); 
    $sql="SELECT * FROM armor WHERE armor_type='Greaves'";
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
    echo "<tr><td><img onclick='addOrUpdateUrlParam(`" .$ArmorType. "`, " .$ID. ");' src='../images/simulator/simu-icon-add.gif' style='width:21px;'></td><td class='type" .$Type. "'>(" .$Type. ")</td><td>" .$Level. "</td><td>" .$SetName. "</td><td><img src='../images/" .$Image. ".png' class='armorimage' title='" .$SetName. "'></td><td>" .$ItemName. "</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr>\n";

    }
    mysql_close();
?>
</table>
</div>
</div></div>
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l7 m11 s11"><h3>Skills</h3>
</div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
</div>
<div class="w3-row">
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
<div class="w3-col l7 m11 s11">
<?php
        $helmetSkill1='noskill';
        $helmetSkill1Num=0;
        $helmetSkill2='noskill';
        $helmetSkill2Num=0;
        $helmetSkill3='noskill';
        $helmetSkill3Num=0;
        $helmetSkill4='noskill';
        $helmetSkill4Num=0;
        $helmetSkill5='noskill';
        $helmetSkill5Num=0;
        $vambracesSkill1='noskill';
        $vambracesSkill1Num=0;
        $vambracesSkill2='noskill';
        $vambracesSkill2Num=0;
        $vambracesSkill3='noskill';
        $vambracesSkill3Num=0;
        $vambracesSkill4='noskill';
        $vambracesSkill4Num=0;
        $vambracesSkill5='noskill';
        $vambracesSkill5Num=0;
        $armorSkill1='noskill';
        $armorSkill1Num=0;
        $armorSkill2='noskill';
        $armorSkill2Num=0;
        $armorSkill3='noskill';
        $armorSkill3Num=0;
        $armorSkill4='noskill';
        $armorSkill4Num=0;
        $armorSkill5='noskill';
        $armorSkill5Num=0;
        $waistSkill1='noskill';
        $waistSkill1Num=0;
        $waistSkill2='noskill';
        $waistSkill2Num=0;
        $waistSkill3='noskill';
        $waistSkill3Num=0;
        $waistSkill4='noskill';
        $waistSkill4Num=0;
        $waistSkill5='noskill';
        $waistSkill5Num=0;
        $greavesSkill1='noskill';
        $greavesSkill1Num=0;
        $greavesSkill2='noskill';
        $greavesSkill2Num=0;
        $greavesSkill3='noskill';
        $greavesSkill3Num=0;
        $greavesSkill4='noskill';
        $greavesSkill4Num=0;
        $greavesSkill5='noskill';
        $greavesSkill5Num=0;
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
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $helmetSkill1=$row['skill1'];
        $helmetSkill1Num=$row['skill1_num'];
        $helmetSkill2=$row['skill2'];
        $helmetSkill2Num=$row['skill2_num'];
        $helmetSkill3=$row['skill3'];
        $helmetSkill3Num=$row['skill3_num'];
        $helmetSkill4=$row['skill4'];
        $helmetSkill4Num=$row['skill4_num'];
        $helmetSkill5=$row['skill5'];
        $helmetSkill5Num=$row['skill5_num'];
    }
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
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $vambracesSkill1=$row['skill1'];
        $vambracesSkill1Num=$row['skill1_num'];
        $vambracesSkill2=$row['skill2'];
        $vambracesSkill2Num=$row['skill2_num'];
        $vambracesSkill3=$row['skill3'];
        $vambracesSkill3Num=$row['skill3_num'];
        $vambracesSkill4=$row['skill4'];
        $vambracesSkill4Num=$row['skill4_num'];
        $vambracesSkill5=$row['skill5'];
        $vambracesSkill5Num=$row['skill5_num'];
    }
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
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $armorSkill1=$row['skill1'];
        $armorSkill1Num=$row['skill1_num'];
        $armorSkill2=$row['skill2'];
        $armorSkill2Num=$row['skill2_num'];
        $armorSkill3=$row['skill3'];
        $armorSkill3Num=$row['skill3_num'];
        $armorSkill4=$row['skill4'];
        $armorSkill4Num=$row['skill4_num'];
        $armorSkill5=$row['skill5'];
        $armorSkill5Num=$row['skill5_num'];
    }
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
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $waistSkill1=$row['skill1'];
        $waistSkill1Num=$row['skill1_num'];
        $waistSkill2=$row['skill2'];
        $waistSkill2Num=$row['skill2_num'];
        $waistSkill3=$row['skill3'];
        $waistSkill3Num=$row['skill3_num'];
        $waistSkill4=$row['skill4'];
        $waistSkill4Num=$row['skill4_num'];
        $waistSkill5=$row['skill5'];
        $waistSkill5Num=$row['skill5_num'];
    }
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
        $result=mysql_query($sql); 
        $row=mysql_fetch_array($result);
        $greavesSkill1=$row['skill1'];
        $greavesSkill1Num=$row['skill1_num'];
        $greavesSkill2=$row['skill2'];
        $greavesSkill2Num=$row['skill2_num'];
        $greavesSkill3=$row['skill3'];
        $greavesSkill3Num=$row['skill3_num'];
        $greavesSkill4=$row['skill4'];
        $greavesSkill4Num=$row['skill4_num'];
        $greavesSkill5=$row['skill5'];
        $greavesSkill5Num=$row['skill5_num'];
    }
error_reporting(0);
$myArray = array(
    0 => array(
        $helmetSkill1 => $helmetSkill1Num,
        $helmetSkill2 => $helmetSkill2Num,
        $helmetSkill3 => $helmetSkill3Num,
        $helmetSkill4 => $helmetSkill4Num,
        $helmetSkill5 => $helmetSkill5Num
    ),
    1 => array(
        $vambracesSkill1 => $vambracesSkill1Num,
        $vambracesSkill2 => $vambracesSkill2Num,
        $vambracesSkill3 => $vambracesSkill3Num,
        $vambracesSkill4 => $vambracesSkill4Num,
        $vambracesSkill5 => $vambracesSkill5Num
    ),
    2 => array(
        $armorSkill1 => $armorSkill1Num,
        $armorSkill2 => $armorSkill2Num,
        $armorSkill3 => $armorSkill3Num,
        $armorSkill4 => $armorSkill4Num,
        $armorSkill5 => $armorSkill5Num
    ),
    3 => array(
        $waistSkill1 => $waistSkill1Num,
        $waistSkill2 => $waistSkill2Num,
        $waistSkill3 => $waistSkill3Num,
        $waistSkill4 => $waistSkill4Num,
        $waistSkill5 => $waistSkill5Num
    ),
    4 => array(
        $greavesSkill1 => $greavesSkill1Num,
        $greavesSkill2 => $greavesSkill2Num,
        $greavesSkill3 => $greavesSkill3Num,
        $greavesSkill4 => $greavesSkill4Num,
        $greavesSkill5 => $greavesSkill5Num
    ),
);



$sumArray = array();

foreach ($myArray as $k=>$subArray) {
  foreach ($subArray as $id=>$value) {
    $sumArray[$id]+=$value;
  }
}

echo "<table><tr class='noskill".$sumArray['Ambush']."'><td>Ambush</td><td>".$sumArray['Ambush']."</td></tr>".
"<tr class='noskill".$sumArray['Anti-bacterial']."'><td>Anti-bacterial</td><td>".$sumArray['Anti-bacterial']."</td></tr>".
"<tr class='noskill".$sumArray['Attack']."'><td>Attack</td><td>".$sumArray['Attack']."</td></tr>".
"<tr class='noskill".$sumArray['Butterfly Dance']."'><td>Butterfly Dance</td><td>".$sumArray['Butterfly Dance']."</td></tr>".
"<tr class='noskill".$sumArray['Cold Res']."'><td>Cold Res</td><td>".$sumArray['Cold Res']."</td></tr>".
"<tr class='noskill".$sumArray['Constitution']."'><td>Constitution</td><td>".$sumArray['Constitution']."</td></tr>".
"<tr class='noskill".$sumArray['Craftsman']."'><td>Craftsman</td><td>".$sumArray['Craftsman']."</td></tr>".
"<tr class='noskill".$sumArray['Crit Draw']."'><td>Crit Draw</td><td>".$sumArray['Crit Draw']."</td></tr>".
"<tr class='noskill".$sumArray['Defense']."'><td>Defense</td><td>".$sumArray['Defense']."</td></tr>".
"<tr class='noskill".$sumArray['Defense Up']."'><td>Defense Up</td><td>".$sumArray['Defense Up']."</td></tr>".
"<tr class='noskill".$sumArray['Destroyer']."'><td>Destroyer</td><td>".$sumArray['Destroyer']."</td></tr>".
"<tr class='noskill".$sumArray['Dragon Atk']."'><td>Dragon Atk</td><td>".$sumArray['Dragon Atk']."</td></tr>".
"<tr class='noskill".$sumArray['Eating']."'><td>Eating</td><td>".$sumArray['Eating']."</td></tr>".
"<tr class='noskill".$sumArray['Evade Dist']."'><td>Evade Dist</td><td>".$sumArray['Evade Dist']."</td></tr>".
"<tr class='noskill".$sumArray['Evasion']."'><td>Evasion</td><td>".$sumArray['Evasion']."</td></tr>".
"<tr class='noskill".$sumArray['Expert']."'><td>Expert</td><td>".$sumArray['Expert']."</td></tr>".
"<tr class='noskill".$sumArray['FastCharge']."'><td>FastCharge</td><td>".$sumArray['FastCharge']."</td></tr>".
"<tr class='noskill".$sumArray['Fencing']."'><td>Fencing</td><td>".$sumArray['Fencing']."</td></tr>".
"<tr class='noskill".$sumArray['Fire Atk']."'><td>Fire Atk</td><td>".$sumArray['Fire Atk']."</td></tr>".
"<tr class='noskill".$sumArray['Fire Res']."'><td>Fire Res</td><td>".$sumArray['Fire Res']."</td></tr>".
"<tr class='noskill".$sumArray['Gluttony']."'><td>Gluttony</td><td>".$sumArray['Gluttony']."</td></tr>".
"<tr class='noskill".$sumArray['Guard']."'><td>Guard</td><td>".$sumArray['Guard']."</td></tr>".
"<tr class='noskill".$sumArray['Guts']."'><td>Guts</td><td>".$sumArray['Guts']."</td></tr>".
"<tr class='noskill".$sumArray['Health']."'><td>Health</td><td>".$sumArray['Health']."</td></tr>".
"<tr class='noskill".$sumArray['Hearing']."'><td>Hearing</td><td>".$sumArray['Hearing']."</td></tr>".
"<tr class='noskill".$sumArray['Heat Res']."'><td>Heat Res</td><td>".$sumArray['Heat Res']."</td></tr>".
"<tr class='noskill".$sumArray['Herb King']."'><td>Herb King</td><td>".$sumArray['Herb King']."</td></tr>".
"<tr class='noskill".$sumArray['Hormone']."'><td>Hormone</td><td>".$sumArray['Hormone']."</td></tr>".
"<tr class='noskill".$sumArray['Hunger']."'><td>Hunger</td><td>".$sumArray['Hunger']."</td></tr>".
"<tr class='noskill".$sumArray['Ice Atk']."'><td>Ice Atk</td><td>".$sumArray['Ice Atk']."</td></tr>".
"<tr class='noskill".$sumArray['Ice Res']."'><td>Ice Res</td><td>".$sumArray['Ice Res']."</td></tr>".
"<tr class='noskill".$sumArray['Knowing Technique']."'><td>Knowing Technique</td><td>".$sumArray['Knowing Technique']."</td></tr>".
"<tr class='noskill".$sumArray['KO King']."'><td>KO King</td><td>".$sumArray['KO King']."</td></tr>".
"<tr class='noskill".$sumArray['Loading']."'><td>Loading</td><td>".$sumArray['Loading']."</td></tr>".
"<tr class='noskill".$sumArray['Mud/Snow']."'><td>Mud/Snow</td><td>".$sumArray['Mud/Snow']."</td></tr>".
"<tr class='noskill".$sumArray['Normal Up']."'><td>Normal Up</td><td>".$sumArray['Normal Up']."</td></tr>".
"<tr class='noskill".$sumArray['Paralysis Res']."'><td>Paralysis Res</td><td>".$sumArray['Paralysis Res']."</td></tr>".
"<tr class='noskill".$sumArray['Pellet Up']."'><td>Pellet Up</td><td>".$sumArray['Pellet Up']."</td></tr>".
"<tr class='noskill".$sumArray['Perception']."'><td>Perception</td><td>".$sumArray['Perception']."</td></tr>".
"<tr class='noskill".$sumArray['Pierce Up']."'><td>Pierce Up</td><td>".$sumArray['Pierce Up']."</td></tr>".
"<tr class='noskill".$sumArray['Poison']."'><td>Poison</td><td>".$sumArray['Poison']."</td></tr>".
"<tr class='noskill".$sumArray['Potential']."'><td>Potential</td><td>".$sumArray['Potential']."</td></tr>".
"<tr class='noskill".$sumArray['Protection']."'><td>Protection</td><td>".$sumArray['Protection']."</td></tr>".
"<tr class='noskill".$sumArray['Psychic']."'><td>Psychic</td><td>".$sumArray['Psychic']."</td></tr>".
"<tr class='noskill".$sumArray['Rec Speed']."'><td>Rec Speed</td><td>".$sumArray['Rec Speed']."</td></tr>".
"<tr class='noskill".$sumArray['Recoil']."'><td>Recoil</td><td>".$sumArray['Recoil']."</td></tr>".
"<tr class='noskill".$sumArray['Reload']."'><td>Reload Spd</td><td>".$sumArray['Reload Spd']."</td></tr>".
"<tr class='noskill".$sumArray['Resilience']."'><td>Resilience</td><td>".$sumArray['Resilience']."</td></tr>".
"<tr class='noskill".$sumArray['Sense']."'><td>Sense</td><td>".$sumArray['Sense']."</td></tr>".
"<tr class='noskill".$sumArray['Sharpener']."'><td>Sharpener</td><td>".$sumArray['Sharpener']."</td></tr>".
"<tr class='noskill".$sumArray['Sharpness']."'><td>Sharpness</td><td>".$sumArray['Sharpness']."</td></tr>".
"<tr class='noskill".$sumArray['Sleep']."'><td>Sleep</td><td>".$sumArray['Sleep']."</td></tr>".
"<tr class='noskill".$sumArray['SpeedSetup']."'><td>SpeedSetup</td><td>".$sumArray['SpeedSetup']."</td></tr>".
"<tr class='noskill".$sumArray['Spirit']."'><td>Spirit</td><td>".$sumArray['Spirit']."</td></tr>".
"<tr class='noskill".$sumArray['Stam Recov']."'><td>Stam Recov</td><td>".$sumArray['Stam Recov']."</td></tr>".
"<tr class='noskill".$sumArray['Status']."'><td>Status</td><td>".$sumArray['Status']."</td></tr>".
"<tr class='noskill".$sumArray['Stun']."'><td>Stun</td><td>".$sumArray['Stun']."</td></tr>".
"<tr class='noskill".$sumArray['Survivor']."'><td>Survivor</td><td>".$sumArray['Survivor']."</td></tr>".
"<tr class='noskill".$sumArray['Tenderizer']."'><td>Tenderizer</td><td>".$sumArray['Tenderizer']."</td></tr>".
"<tr class='noskill".$sumArray['Thorns']."'><td>Thorns</td><td>".$sumArray['Thorns']."</td></tr>".
"<tr class='noskill".$sumArray['Thunder Res']."'><td>Thunder Res</td><td>".$sumArray['Thunder Res']."</td></tr>".
"<tr class='noskill".$sumArray['ThunderAtk']."'><td>ThunderAtk</td><td>".$sumArray['ThunderAtk']."</td></tr>".
"<tr class='noskill".$sumArray['Tremor Res']."'><td>Tremor Res</td><td>".$sumArray['Tremor Res']."</td></tr>".
"<tr class='noskill".$sumArray['Tripping Power']."'><td>Tripping Power</td><td>".$sumArray['Tripping Power']."</td></tr>".
"<tr class='noskill".$sumArray['Unscathed']."'><td>Unscathed</td><td>".$sumArray['Unscathed']."</td></tr>".
"<tr class='noskill".$sumArray['Water Atk']."'><td>Water Atk</td><td>".$sumArray['Water Atk']."</td></tr>".
"<tr class='noskill".$sumArray['Wide-Range']."'><td>Wide-Range</td><td>".$sumArray['Wide-Range']."</td></tr>".
"<tr class='noskill".$sumArray['Wind Res']."'><td>Wind Res</td><td>".$sumArray['Wind Res']."</td></tr></table>";

?>
</div>
<div class="w3-col l2 w3-hide-medium w3-hide-small">&nbsp;</div>
</div>
</div>
</div>
</div>
</div>

<div id="footer" class="w3-container w3-middle-align w3-hide-small" style="margin-left:200px; margin-right:200px;"></div>
</div>
</body>
</html> 