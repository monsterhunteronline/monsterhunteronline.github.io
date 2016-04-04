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
<title>MHO FAQ - Set Builder</title>
</head>

<body onload="navbarContent(); footerContent(); cookieState();">
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
error_reporting(1);
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

$helmetArray = $myArray[0];
$vambracesArray = $myArray[1];
$armorArray = $myArray[2];
$waistArray = $myArray[3];
$greavesArray = $myArray[4];

$Ambush = "";
if ($sumArray['Ambush']>=10) {
    $Ambush = "Assassin Tech +1";
}
if ($sumArray['Ambush']>=15) {
    $Ambush = "Assassin Tech +2";
}
$Antibacterial = "";
if ($sumArray['Anti-bacterial']>=10) {
    $Antibacterial = "Bacteria Cancel";
}
$Attack = "";
if ($sumArray['Attack']>=10) {
    $Attack = "Attack Up (S)";
}
if ($sumArray['Attack']>=15) {
    $Attack = "Attack Up (M)";
}
if ($sumArray['Attack']>=20) {
    $Attack = "Attack Up (L)";
}
if ($sumArray['Attack']>=25) {
    $Attack = "Attack Up (XL)";
}
if ($sumArray['Attack']>=30) {
    $Attack = "Attack Up (XXL)";
}
if ($sumArray['Attack']<=-10) {
    $Attack = "Attack Down (S)";
}
if ($sumArray['Attack']<=-15) {
    $Attack = "Attack Down (M)";
}
if ($sumArray['Attack']<=-20) {
    $Attack = "Attack Down (L)";
}
if ($sumArray['Attack']<=-25) {
    $Attack = "Attack Down (XL)";
}
$Butterfly = "";
if ($sumArray['Butterfly Dance']>=10) {
    $Butterfly = "Butterfly Form";
}
$Cold = "";
if ($sumArray['Cold Res']>=10) {
    $Cold = "Cold Cancel";
}
$Constitution = "";
if ($sumArray['Constitution']>=10) {
    $Constitution = "Constitution +1";
}
if ($sumArray['Constitution']>=15) {
    $Constitution = "Constitution +2";
}
if ($sumArray['Constitution']>=20) {
    $Constitution = "Constitution +3";
}
if ($sumArray['Constitution']<=-10) {
    $Constitution = "Constitution -1";
}
if ($sumArray['Constitution']<=-15) {
    $Constitution = "Constitution -2";
}
$Craftsman = "";
if ($sumArray['Craftsman']>=10) {
    $Craftsman = "Sharpness +1";
}
$Crit = "";
if ($sumArray['Crit Draw']>=10) {
    $Crit = "Critical Draw";
}
if ($sumArray['Crit Draw']>=15) {
    $Crit = "Critical Draw Max";
}
$Defense = "";
if ($sumArray['Defense']>=10) {
    $Defense = "Defense Up (S)";
}
if ($sumArray['Defense']>=15) {
    $Defense = "Defense Up (M)";
}
if ($sumArray['Defense']>=20) {
    $Defense = "Defense Up (L)";
}
if ($sumArray['Defense']>=25) {
    $Defense = "Defense Up (XL)";
}
if ($sumArray['Defense']>=30) {
    $Defense = "Defense Up (XXL)";
}
if ($sumArray['Defense']<=-10) {
    $Defense = "Defense Down (S)";
}
if ($sumArray['Defense']<=-15) {
    $Defense = "Defense Down (M)";
}
if ($sumArray['Defense']<=-20) {
    $Defense = "Defense Down (L)";
}
if ($sumArray['Defense']<=-25) {
    $Defense = "Defense Down (XL)";
}
$Destroyer = "";
if ($sumArray['Destroyer']>=10) {
    $Destroyer = "Partbreaker";
}
if ($sumArray['Destroyer']>=15) {
    $Destroyer = "Destruction God";
}
$Dragon = "";
if ($sumArray['Dragon Atk']>=10) {
    $Dragon = "Dragon Atk +1";
}
if ($sumArray['Dragon Atk']>=15) {
    $Dragon = "Dragon Atk +2";
}
if ($sumArray['Dragon Atk']>=20) {
    $Dragon = "Dragon Atk +3";
}
if ($sumArray['Dragon Atk']<=-10) {
    $Dragon = "Dragon Atk Down";
}
$Eating = "";
if ($sumArray['Eating']>=10) {
    $Eating = "Speed Eating";
}
if ($sumArray['Eating']<=-10) {
    $Eating = "Slow Eater";
}
$Evade = "";
if ($sumArray['Evade Dist']>=10) {
    $Evade = "Evade Dist +1";
}
if ($sumArray['Evade Dist']>=15) {
    $Evade = "Evade Dist +2";
}
$Evasion = "";
if ($sumArray['Evasion']>=10) {
    $Evasion = "Evasion +1";
}
if ($sumArray['Evasion']>=15) {
    $Evasion = "Evasion +2";
}
if ($sumArray['Evasion']>=20) {
    $Evasion = "Evasion +3";
}
$Expert = "";
if ($sumArray['Expert']>=10) {
    $Expert = "Critical Eye +1";
}
if ($sumArray['Expert']>=15) {
    $Expert = "Critical Eye +2";
}
if ($sumArray['Expert']>=20) {
    $Expert = "Critical Eye +3";
}
if ($sumArray['Expert']>=25) {
    $Expert = "Critical Eye +4";
}
if ($sumArray['Expert']>=30) {
    $Expert = "Critical Eye +5";
}
if ($sumArray['Expert']<=-10) {
    $Expert = "Critical Eye -1";
}
if ($sumArray['Expert']<=-15) {
    $Expert = "Critical Eye -2";
}
if ($sumArray['Expert']<=-20) {
    $Expert = "Critical Eye -3";
}
if ($sumArray['Expert']<=-25) {
    $Expert = "Critical Eye -4";
}
$FastCharge = "";
if ($sumArray['FastCharge']>=10) {
    $FastCharge = "Concentrate";
}
if ($sumArray['FastCharge']>=15) {
    $FastCharge = "Focus";
}
if ($sumArray['FastCharge']>=20) {
    $FastCharge = "Attentive";
}
if ($sumArray['FastCharge']<=-10) {
    $FastCharge = "Distraction";
}
$Fencing = "";
if ($sumArray['Fencing']>=10) {
    $Fencing = "Mind's Eye";
}
$FireAtk = "";
if ($sumArray['Fire Atk']>=10) {
    $FireAtk = "Fire Atk +1";
}
if ($sumArray['Fire Atk']>=15) {
    $FireAtk = "Fire Atk +2";
}
if ($sumArray['Fire Atk']>=20) {
    $FireAtk = "Fire Atk +3";
}
if ($sumArray['Fire Atk']<=-10) {
    $FireAtk = "Fire Atk Down";
}
$FireRes = "";
if ($sumArray['Fire Res']>=10) {
    $FireRes = "Fire Res +1";
}
if ($sumArray['Fire Res']>=15) {
    $FireRes = "Fire Res +2";
}
if ($sumArray['Fire Res']>=20) {
    $FireRes = "Fire Res +3";
}
if ($sumArray['Fire Res']<=-10) {
    $FireRes = "Fire Res Down";
}
$Gluttony = "";
if ($sumArray['Gluttony']>=10) {
    $Gluttony = "Gourmand";
}
$Guard = "";
if ($sumArray['Guard']>=10) {
    $Guard = "Guard +1";
}
if ($sumArray['Guard']>=15) {
    $Guard = "Guard +2";
}
if ($sumArray['Guard']>=20) {
    $Guard = "Guard +3";
}
$GuardUp = "";
if ($sumArray['Guard Up']>=10) {
    $GuardUp = "Guard Boost";
}
$Guts = "";
if ($sumArray['Guts']>=10) {
    $Guts = "Guts";
}
$Health = "";
if ($sumArray['Health']>=10) {
    $Health = "Health +1";
}
if ($sumArray['Health']>=15) {
    $Health = "Health +2";
}
if ($sumArray['Health']>=20) {
    $Health = "Health +3";
}
if ($sumArray['Health']>=25) {
    $Health = "Health +4";
}
if ($sumArray['Health']>=30) {
    $Health = "Health +5";
}
if ($sumArray['Health']<=-10) {
    $Health = "Health -1";
}
if ($sumArray['Health']<=-15) {
    $Health = "Health -2";
}
if ($sumArray['Health']<=-20) {
    $Health = "Health -3";
}
if ($sumArray['Health']<=-25) {
    $Health = "Health -4";
}
$Hearing = "";
if ($sumArray['Hearing']>=10) {
    $Hearing = "Earplugs";
}
if ($sumArray['Hearing']>=20) {
    $Hearing = "HG Earplugs";
}
$Heat = "";
if ($sumArray['Heat Res']>=10) {
    $Heat = "Heat Cancel";
}
$Herb = "";
if ($sumArray['Herb King']>=10) {
    $Herb = "Herbal Daren";
}
$Hormone = "";
if ($sumArray['Hormone']>=10) {
    $Hormone = "Attract";
}
$Hunger = "";
if ($sumArray['Hunger']>=10) {
    $Hunger = "Halve Hunger";
}
if ($sumArray['Hunger']>=15) {
    $Hunger = "Negate Hunger";
}
if ($sumArray['Hunger']<=-10) {
    $Hunger = "Raise Hunger";
}
$IceAtk = "";
if ($sumArray['Ice Atk']>=10) {
    $IceAtk = "Ice Itk +1";
}
if ($sumArray['Ice Atk']>=15) {
    $IceAtk = "Ice Atk +2";
}
if ($sumArray['Ice Atk']>=20) {
    $IceAtk = "Ice Atk +3";
}
if ($sumArray['Ice Atk']<=-10) {
    $IceAtk = "Ice Atk Down";
}
$IceRes = "";
if ($sumArray['Ice Res']>=10) {
    $IceRes = "Ice Res +1";
}
if ($sumArray['Ice Res']>=15) {
    $IceRes = "Ice Res +2";
}
if ($sumArray['Ice Res']>=20) {
    $IceRes = "Ice Res +3";
}
if ($sumArray['Ice Res']<=-10) {
    $IceRes = "Ice Res Down";
}
$Knowing = "";
if ($sumArray['Knowing Technique']>=10) {
    $Knowing = "Violent Strike";
}
$KO = "";
if ($sumArray['KO King']>=10) {
    $KO = "KO King";
}
$Loading = "";
if ($sumArray['Loading']>=10) {
    $Loading = "Load Up";
}
$Mud = "";
if ($sumArray['Mud/Snow']>=10) {
    $Mud = "Negate Mud/Snow";
}
$Normal = "";
if ($sumArray['Normal Up']>=10) {
    $Normal = "Normal/Rapid Up";
}
$Paralysis = "";
if ($sumArray['Paralysis']>=10) {
    $Paralysis = "Negate Paralysis";
}
if ($sumArray['Paralysis']<=-10) {
    $Paralysis = "Double Paralysis";
}
$Pellet = "";
if ($sumArray['Pellet Up']>=10) {
    $Pellet = "Pellet/Spread Up";
}
$Perception = "";
if ($sumArray['Perception']>=10) {
    $Perception = "Capture Guru";
}
$Pierce = "";
if ($sumArray['']>=10) {
    $Pierce = "Pierce/Pierce Up";
}
$Poison = "";
if ($sumArray['Poison']>=10) {
    $Poison = "Halve Poison";
}
if ($sumArray['Poison']>=15) {
    $Poison = "Negate Poison";
}
if ($sumArray['Poison']<=-10) {
    $Poison = "Double Poison";
}
$Potential = "";
if ($sumArray['Potential']>=10) {
    $Potential = "Adrenaline +1";
}
if ($sumArray['Potential']>=15) {
    $Potential = "Adrenaline +2";
}
if ($sumArray['Potential']>=20) {
    $Potential = "Adrenaline +3";
}
if ($sumArray['Potential']<=-10) {
    $Potential = "Worrywart";
}
$Protection = "";
if ($sumArray['Protection']>=10) {
    $Protection = "Holy Blessing";
}
if ($sumArray['Protection']>=15) {
    $Protection = "Divine Blessing";
}
if ($sumArray['Protection']<=-10) {
    $Protection = "Evil Blessing";
}
if ($sumArray['Protection']<=-15) {
    $Protection = "Demonic Blessing";
}
$Psychic = "";
if ($sumArray['Psychic']>=10) {
    $Psychic = "Detect";
}
if ($sumArray['Psychic']>=15) {
    $Psychic = "Autotracker";
}
$Rec = "";
if ($sumArray['Rec Speed']>=10) {
    $Rec = "Rec Speed +1";
}
if ($sumArray['Rec Speed']>=15) {
    $Rec = "Rec Speed +2";
}
if ($sumArray['Rec Speed']>=20) {
    $Rec = "Rec Speed +3";
}
if ($sumArray['Rec Speed']<=-10) {
    $Rec = "Rec Speed -1";
}
if ($sumArray['Rec Speed']<=-15) {
    $Rec = "Rec Speed -2 ";
}
if ($sumArray['Rec Speed']<=-20) {
    $Rec = "Rec Speed -3";
}
$Recoil = "";
if ($sumArray['Recoil']>=10) {
    $Recoil = "Recoil Down +1";
}
if ($sumArray['Recoil']>=15) {
    $Recoil = "Recoil Down +2";
}
if ($sumArray['Recoil']<=-10) {
    $Recoil = "Recoil Up";
}
$Reload = "";
if ($sumArray['Reload Spd']>=10) {
    $Reload = "Reload Spd +1";
}
if ($sumArray['Reload Spd']>=15) {
    $Reload = "Reload Spd +2";
}
if ($sumArray['Reload Spd']>=20) {
    $Reload = "Reload Spd +3";
}
if ($sumArray['Reload Spd']<=-10) {
    $Reload = "Reload Spd -1";
}
if ($sumArray['Reload Spd']<=-15) {
    $Reload = "Reload Spd -2";
}
$Resilience = "";
if ($sumArray['Resilience']>=10) {
    $Resilience = "";
}
if ($sumArray['Resilience']>=15) {
    $Resilience = "";
}
$Sense = "";
if ($sumArray['Sense']>=10) {
    $Sense = "Sneak";
}
if ($sumArray['Sense']<=-10) {
    $Sense = "Taunt";
}
$Sharpener = "";
if ($sumArray['Sharpener']>=10) {
    $Sharpener = "Speed Sharpening";
}
if ($sumArray['Sharpener']>=15) {
    $Sharpener = "High Speed Sharpening";
}
if ($sumArray['Sharpener']<=-10) {
    $Sharpener = "Slow Sharpening";
}
$Sharpness = "";
if ($sumArray['Sharpness']>=10) {
    $Sharpness = "Sharp";
}
if ($sumArray['Sharpness']>=15) {
    $Sharpness = "Razor Sharp";
}
if ($sumArray['Sharpness']<=-10) {
    $Sharpness = "Blunt Edge";
}
$Sleep = "";
if ($sumArray['Sleep']>=10) {
    $Sleep = "Negate Sleep";
}
if ($sumArray['Sleep']<=-10) {
    $Sleep = "Double Sleep";
}
$SpeedSetup = "";
if ($sumArray['SpeedSetup']>=10) {
    $SpeedSetup = "Trap Master";
}
$Spirit = "";
if ($sumArray['Spirit']>=10) {
    $Spirit = "Challenger +1";
}
if ($sumArray['Spirit']>=15) {
    $Spirit = "Challenger +2";
}
$Stam = "";
if ($sumArray['Stam Recov']>=10) {
    $Stam = "Stam Recov +1";
}
if ($sumArray['Stam Recov']>=15) {
    $Stam = "Stam Recov +2";
}
if ($sumArray['Stam Recov']>=20) {
    $Stam = "Stam Recov +3";
}
if ($sumArray['Stam Recov']<=-10) {
    $Stam = "Stam Recov -1";
}
if ($sumArray['Stam Recov']<=-15) {
    $Stam = "Stam Recov -2";
}
$Status = "";
if ($sumArray['Status']>=10) {
    $Status = "Status Atk +1";
}
if ($sumArray['Status']>=15) {
    $Status = "Status Atk +2";
}
if ($sumArray['Status']>=20) {
    $Status = "Status Atk +3";
}
if ($sumArray['Status']<=-10) {
    $Status = "Status Atk Down";
}
$Stun = "";
if ($sumArray['Stun']>=10) {
    $Stun = "Halve Stun";
}
if ($sumArray['Stun']>=15) {
    $Stun = "Negate Stun";
}
if ($sumArray['Stun']<=-10) {
    $Stun = "Double Stun";
}
$Survivor = "";
if ($sumArray['Survivor']>=10) {
    $Survivor = "Fortify";
}
$Tenderizer = "";
if ($sumArray['Tenderizer']>=10) {
    $Tenderizer = "Weakness Exploit";
}
$Thorns = "";
if ($sumArray['Thorns']>=10) {
    $Thorns = "Negate Thorns";
}
$ThunderRes = "";
if ($sumArray['Thunder Res']>=10) {
    $ThunderRes = "Thunder Res +1";
}
if ($sumArray['Thunder Res']>=15) {
    $ThunderRes = "Thunder Res +2";
}
if ($sumArray['Thunder Res']>=20) {
    $ThunderRes = "Thunder Res +3";
}
if ($sumArray['Thunder Res']<=-10) {
    $ThunderRes = "Thunder Res Down";
}
$ThunderAtk = "";
if ($sumArray['ThunderAtk']>=10) {
    $ThunderAtk = "Thunder Atk +1";
}
if ($sumArray['ThunderAtk']>=15) {
    $ThunderAtk = "Thunder Atk +2";
}
if ($sumArray['ThunderAtk']>=20) {
    $ThunderAtk = "Thunder Atk +3";
}
if ($sumArray['ThunderAtk']<=-10) {
    $ThunderAtk = "Thunder Atk Down";
}
$Tremor = "";
if ($sumArray['Tremor Res']>=10) {
    $Tremor = "Tremor Res";
}
$Tripping = "";
if ($sumArray['Tripping Power']>=10) {
    $Tripping = "Tripping Power";
}
$Unscathed = "";
if ($sumArray['Unscathed']>=10) {
    $Unscathed = "Peak Performance";
}
$WaterAtk = "";
if ($sumArray['Water Atk']>=10) {
    $WaterAtk = "Water Atk +1";
}
if ($sumArray['Water Atk']>=15) {
    $WaterAtk = "Water Atk +2";
}
if ($sumArray['Water Atk']>=20) {
    $WaterAtk = "Water Atk +3";
}
if ($sumArray['Water Atk']<=-10) {
    $WaterAtk = "Water Atk Down";
}
$WideRange = "";
if ($sumArray['Wide-Range']>=10) {
    $WideRange = "Wide-Range +1";
}
if ($sumArray['Wide-Range']>=15) {
    $WideRange = "Wide-Range +2";
}
if ($sumArray['Wide-Range']>=20) {
    $WideRange = "Wide-Range +3";
}
$Wind = "";
if ($sumArray['Wind Res']>=10) {
    $Wind = "Windproof (Lo)";
}
if ($sumArray['Wind Res']>=15) {
    $Wind = "Windproof (Hi)";
}
if ($sumArray['Wind Res']>=20) {
    $Wind = "Dragon Windproof";
}

echo "<table><tr><td>Skill Name</td><td>Helmet</td><td>Vambraces</td><td>Armor</td><td>Waist</td><td>Greaves</td><td>Total</td><td>Activated</td></tr>".
"<tr class='noskill".$sumArray['Ambush']."'><td>Ambush</td><td>".$helmetArray['Ambush']."</td><td>".$vambracesArray['Ambush']."</td><td>".$armorArray['Ambush']."</td><td>".$waistArray['Ambush']."</td><td>".$greavesArray['Ambush']."</td><td>".$sumArray['Ambush']."</td><td>".$Ambush."</td></tr>".
"<tr class='noskill".$sumArray['Anti-bacterial']."'><td>Anti-bacterial</td><td>".$helmetArray['Anti-bacterial']."</td><td>".$vambracesArray['Anti-bacterial']."</td><td>".$armorArray['Anti-bacterial']."</td><td>".$waistArray['Anti-bacterial']."</td><td>".$greavesArray['Anti-bacterial']."</td><td>".$sumArray['Anti-bacterial']."</td><td>".$Antibacterial."</td></tr>".
"<tr class='noskill".$sumArray['Attack']."'><td>Attack</td><td>".$helmetArray['Attack']."</td><td>".$vambracesArray['Attack']."</td><td>".$armorArray['Attack']."</td><td>".$waistArray['Attack']."</td><td>".$greavesArray['Attack']."</td><td>".$sumArray['Attack']."</td><td>".$Attack."</td></tr>".
"<tr class='noskill".$sumArray['Butterfly Dance']."'><td>Butterfly Dance</td><td>".$helmetArray['Butterfly Dance']."</td><td>".$vambracesArray['Butterfly Dance']."</td><td>".$armorArray['Butterfly Dance']."</td><td>".$waistArray['Butterfly Dance']."</td><td>".$greavesArray['Butterfly Dance']."</td><td>".$sumArray['Butterfly Dance']."</td><td>".$Butterfly."</td></tr>".
"<tr class='noskill".$sumArray['Cold Res']."'><td>Cold Res</td><td>".$helmetArray['Cold Res']."</td><td>".$vambracesArray['Cold Res']."</td><td>".$armorArray['Cold Res']."</td><td>".$waistArray['Cold Res']."</td><td>".$greavesArray['Cold Res']."</td><td>".$sumArray['Cold Res']."</td><td>".$Cold."</td></tr>".
"<tr class='noskill".$sumArray['Constitution']."'><td>Constitution</td><td>".$helmetArray['Constitution']."</td><td>".$vambracesArray['Constitution']."</td><td>".$armorArray['Constitution']."</td><td>".$waistArray['Constitution']."</td><td>".$greavesArray['Constitution']."</td><td>".$sumArray['Constitution']."</td><td>".$Constitution."</td></tr>".
"<tr class='noskill".$sumArray['Craftsman']."'><td>Craftsman</td><td>".$helmetArray['Craftsman']."</td><td>".$vambracesArray['Craftsman']."</td><td>".$armorArray['Craftsman']."</td><td>".$waistArray['Craftsman']."</td><td>".$greavesArray['Craftsman']."</td><td>".$sumArray['Craftsman']."</td><td>".$Craftsman."</td></tr>".
"<tr class='noskill".$sumArray['Crit Draw']."'><td>Crit Draw</td><td>".$helmetArray['Crit Draw']."</td><td>".$vambracesArray['Crit Draw']."</td><td>".$armorArray['Crit Draw']."</td><td>".$waistArray['Crit Draw']."</td><td>".$greavesArray['Crit Draw']."</td><td>".$sumArray['Crit Draw']."</td><td>".$Crit."</td></tr>".
"<tr class='noskill".$sumArray['Defense']."'><td>Defense</td><td>".$helmetArray['Defense']."</td><td>".$vambracesArray['Defense']."</td><td>".$armorArray['Defense']."</td><td>".$waistArray['Defense']."</td><td>".$greavesArray['Defense']."</td><td>".$sumArray['Defense']."</td><td>".$Defense."</td></tr>".
"<tr class='noskill".$sumArray['Destroyer']."'><td>Destroyer</td><td>".$helmetArray['Destroyer']."</td><td>".$vambracesArray['Destroyer']."</td><td>".$armorArray['Destroyer']."</td><td>".$waistArray['Destroyer']."</td><td>".$greavesArray['Destroyer']."</td><td>".$sumArray['Destroyer']."</td><td>".$Destroyer."</td></tr>".
"<tr class='noskill".$sumArray['Dragon Atk']."'><td>Dragon Atk</td><td>".$helmetArray['Dragon Atk']."</td><td>".$vambracesArray['Dragon Atk']."</td><td>".$armorArray['Dragon Atk']."</td><td>".$waistArray['Dragon Atk']."</td><td>".$greavesArray['Dragon Atk']."</td><td>".$sumArray['Dragon Atk']."</td><td>".$Dragon."</td></tr>".
"<tr class='noskill".$sumArray['Eating']."'><td>Eating</td><td>".$helmetArray['Eating']."</td><td>".$vambracesArray['Eating']."</td><td>".$armorArray['Eating']."</td><td>".$waistArray['Eating']."</td><td>".$greavesArray['Eating']."</td><td>".$sumArray['Eating']."</td><td>".$Eating."</td></tr>".
"<tr class='noskill".$sumArray['Evade Dist']."'><td>Evade Dist</td><td>".$helmetArray['Evade Dist']."</td><td>".$vambracesArray['Evade Dist']."</td><td>".$armorArray['Evade Dist']."</td><td>".$waistArray['Evade Dist']."</td><td>".$greavesArray['Evade Dist']."</td><td>".$sumArray['Evade Dist']."</td><td>".$Evade."</td></tr>".
"<tr class='noskill".$sumArray['Evasion']."'><td>Evasion</td><td>".$helmetArray['Evasion']."</td><td>".$vambracesArray['Evasion']."</td><td>".$armorArray['Evasion']."</td><td>".$waistArray['Evasion']."</td><td>".$greavesArray['Evasion']."</td><td>".$sumArray['Evasion']."</td><td>".$Evasion."</td></tr>".
"<tr class='noskill".$sumArray['Expert']."'><td>Expert</td><td>".$helmetArray['Expert']."</td><td>".$vambracesArray['Expert']."</td><td>".$armorArray['Expert']."</td><td>".$waistArray['Expert']."</td><td>".$greavesArray['Expert']."</td><td>".$sumArray['Expert']."</td><td>".$Expert."</td></tr>".
"<tr class='noskill".$sumArray['FastCharge']."'><td>FastCharge</td><td>".$helmetArray['FastCharge']."</td><td>".$vambracesArray['FastCharge']."</td><td>".$armorArray['FastCharge']."</td><td>".$waistArray['FastCharge']."</td><td>".$greavesArray['FastCharge']."</td><td>".$sumArray['FastCharge']."</td><td>".$FastCharge."</td></tr>".
"<tr class='noskill".$sumArray['Fencing']."'><td>Fencing</td><td>".$helmetArray['Fencing']."</td><td>".$vambracesArray['Fencing']."</td><td>".$armorArray['Fencing']."</td><td>".$waistArray['Fencing']."</td><td>".$greavesArray['Fencing']."</td><td>".$sumArray['Fencing']."</td><td>".$Fencing."</td></tr>".
"<tr class='noskill".$sumArray['Fire Atk']."'><td>Fire Atk</td><td>".$helmetArray['Fire Atk']."</td><td>".$vambracesArray['Fire Atk']."</td><td>".$armorArray['Fire Atk']."</td><td>".$waistArray['Fire Atk']."</td><td>".$greavesArray['Fire Atk']."</td><td>".$sumArray['Fire Atk']."</td><td>".$FireAtk."</td></tr>".
"<tr class='noskill".$sumArray['Fire Res']."'><td>Fire Res</td><td>".$helmetArray['Fire Res']."</td><td>".$vambracesArray['Fire Res']."</td><td>".$armorArray['Fire Res']."</td><td>".$waistArray['Fire Res']."</td><td>".$greavesArray['Fire Res']."</td><td>".$sumArray['Fire Res']."</td><td>".$FireRes."</td></tr>".
"<tr class='noskill".$sumArray['Gluttony']."'><td>Gluttony</td><td>".$helmetArray['Gluttony']."</td><td>".$vambracesArray['Gluttony']."</td><td>".$armorArray['Gluttony']."</td><td>".$waistArray['Gluttony']."</td><td>".$greavesArray['Gluttony']."</td><td>".$sumArray['Gluttony']."</td><td>".$Gluttony."</td></tr>".
"<tr class='noskill".$sumArray['Guard']."'><td>Guard</td><td>".$helmetArray['Guard']."</td><td>".$vambracesArray['Guard']."</td><td>".$armorArray['Guard']."</td><td>".$waistArray['Guard']."</td><td>".$greavesArray['Guard']."</td><td>".$sumArray['Guard']."</td><td>".$Guard."</td></tr>".
"<tr class='noskill".$sumArray['Guard Up']."'><td>Guard Up</td><td>".$helmetArray['Guard Up']."</td><td>".$vambracesArray['Guard Up']."</td><td>".$armorArray['Guard Up']."</td><td>".$waistArray['Guard Up']."</td><td>".$greavesArray['Guard Up']."</td><td>".$sumArray['Guard Up']."</td><td>".$GuardUp."</td></tr>".
"<tr class='noskill".$sumArray['Guts']."'><td>Guts</td><td>".$helmetArray['Guts']."</td><td>".$vambracesArray['Guts']."</td><td>".$armorArray['Guts']."</td><td>".$waistArray['Guts']."</td><td>".$greavesArray['Guts']."</td><td>".$sumArray['Guts']."</td><td>".$Guts."</td></tr>".
"<tr class='noskill".$sumArray['Health']."'><td>Health</td><td>".$helmetArray['Health']."</td><td>".$vambracesArray['Health']."</td><td>".$armorArray['Health']."</td><td>".$waistArray['Health']."</td><td>".$greavesArray['Health']."</td><td>".$sumArray['Health']."</td><td>".$Health."</td></tr>".
"<tr class='noskill".$sumArray['Hearing']."'><td>Hearing</td><td>".$helmetArray['Hearing']."</td><td>".$vambracesArray['Hearing']."</td><td>".$armorArray['Hearing']."</td><td>".$waistArray['Hearing']."</td><td>".$greavesArray['Hearing']."</td><td>".$sumArray['Hearing']."</td><td>".$Hearing."</td></tr>".
"<tr class='noskill".$sumArray['Heat Res']."'><td>Heat Res</td><td>".$helmetArray['Heat Res']."</td><td>".$vambracesArray['Heat Res']."</td><td>".$armorArray['Heat Res']."</td><td>".$waistArray['Heat Res']."</td><td>".$greavesArray['Heat Res']."</td><td>".$sumArray['Heat Res']."</td><td>".$Heat."</td></tr>".
"<tr class='noskill".$sumArray['Herb King']."'><td>Herb King</td><td>".$helmetArray['Herb King']."</td><td>".$vambracesArray['Herb King']."</td><td>".$armorArray['Herb King']."</td><td>".$waistArray['Herb King']."</td><td>".$greavesArray['Herb King']."</td><td>".$sumArray['Herb King']."</td><td>".$Herb."</td></tr>".
"<tr class='noskill".$sumArray['Hormone']."'><td>Hormone</td><td>".$helmetArray['Hormone']."</td><td>".$vambracesArray['Hormone']."</td><td>".$armorArray['Hormone']."</td><td>".$waistArray['Hormone']."</td><td>".$greavesArray['Hormone']."</td><td>".$sumArray['Hormone']."</td><td>".$Hormone."</td></tr>".
"<tr class='noskill".$sumArray['Hunger']."'><td>Hunger</td><td>".$helmetArray['Hunger']."</td><td>".$vambracesArray['Hunger']."</td><td>".$armorArray['Hunger']."</td><td>".$waistArray['Hunger']."</td><td>".$greavesArray['Hunger']."</td><td>".$sumArray['Hunger']."</td><td>".$Hunger."</td></tr>".
"<tr class='noskill".$sumArray['Ice Atk']."'><td>Ice Atk</td><td>".$helmetArray['Ice Atk']."</td><td>".$vambracesArray['Ice Atk']."</td><td>".$armorArray['Ice Atk']."</td><td>".$waistArray['Ice Atk']."</td><td>".$greavesArray['Ice Atk']."</td><td>".$sumArray['Ice Atk']."</td><td>".$IceAtk."</td></tr>".
"<tr class='noskill".$sumArray['Ice Res']."'><td>Ice Res</td><td>".$helmetArray['Ice Res']."</td><td>".$vambracesArray['Ice Res']."</td><td>".$armorArray['Ice Res']."</td><td>".$waistArray['Ice Res']."</td><td>".$greavesArray['Ice Res']."</td><td>".$sumArray['Ice Res']."</td><td>".$IceRes."</td></tr>".
"<tr class='noskill".$sumArray['Knowing Technique']."'><td>Knowing Technique</td><td>".$helmetArray['Knowing Technique']."</td><td>".$vambracesArray['Knowing Technique']."</td><td>".$armorArray['Knowing Technique']."</td><td>".$waistArray['Knowing Technique']."</td><td>".$greavesArray['Knowing Technique']."</td><td>".$sumArray['Knowing Technique']."</td><td>".$Knowing."</td></tr>".
"<tr class='noskill".$sumArray['KO King']."'><td>KO King</td><td>".$helmetArray['KO King']."</td><td>".$vambracesArray['KO King']."</td><td>".$armorArray['KO King']."</td><td>".$waistArray['KO King']."</td><td>".$greavesArray['KO King']."</td><td>".$sumArray['KO King']."</td><td>".$KO."</td></tr>".
"<tr class='noskill".$sumArray['Loading']."'><td>Loading</td><td>".$helmetArray['Loading']."</td><td>".$vambracesArray['Loading']."</td><td>".$armorArray['Loading']."</td><td>".$waistArray['Loading']."</td><td>".$greavesArray['Loading']."</td><td>".$sumArray['Loading']."</td><td>".$Loading."</td></tr>".
"<tr class='noskill".$sumArray['Mud/Snow']."'><td>Mud/Snow</td><td>".$helmetArray['Mud/Snow']."</td><td>".$vambracesArray['Mud/Snow']."</td><td>".$armorArray['Mud/Snow']."</td><td>".$waistArray['Mud/Snow']."</td><td>".$greavesArray['Mud/Snow']."</td><td>".$sumArray['Mud/Snow']."</td><td>".$Mud."</td></tr>".
"<tr class='noskill".$sumArray['Normal Up']."'><td>Normal Up</td><td>".$helmetArray['Normal Up']."</td><td>".$vambracesArray['Normal Up']."</td><td>".$armorArray['Normal Up']."</td><td>".$waistArray['Normal Up']."</td><td>".$greavesArray['Normal Up']."</td><td>".$sumArray['Normal Up']."</td><td>".$Normal."</td></tr>".
"<tr class='noskill".$sumArray['Paralysis']."'><td>Paralysis</td><td>".$helmetArray['Paralysis']."</td><td>".$vambracesArray['Paralysis']."</td><td>".$armorArray['Paralysis']."</td><td>".$waistArray['Paralysis']."</td><td>".$greavesArray['Paralysis']."</td><td>".$sumArray['Paralysis']."</td><td>".$Paralysis."</td></tr>".
"<tr class='noskill".$sumArray['Pellet Up']."'><td>Pellet Up</td><td>".$helmetArray['Pellet Up']."</td><td>".$vambracesArray['Pellet Up']."</td><td>".$armorArray['Pellet Up']."</td><td>".$waistArray['Pellet Up']."</td><td>".$greavesArray['Pellet Up']."</td><td>".$sumArray['Pellet Up']."</td><td>".$Pellet."</td></tr>".
"<tr class='noskill".$sumArray['Perception']."'><td>Perception</td><td>".$helmetArray['Perception']."</td><td>".$vambracesArray['Perception']."</td><td>".$armorArray['Perception']."</td><td>".$waistArray['Perception']."</td><td>".$greavesArray['Perception']."</td><td>".$sumArray['Perception']."</td><td>".$Perception."</td></tr>".
"<tr class='noskill".$sumArray['Pierce Up']."'><td>Pierce Up</td><td>".$helmetArray['Pierce Up']."</td><td>".$vambracesArray['Pierce Up']."</td><td>".$armorArray['Pierce Up']."</td><td>".$waistArray['Pierce Up']."</td><td>".$greavesArray['Pierce Up']."</td><td>".$sumArray['Pierce Up']."</td><td>".$Pierce."</td></tr>".
"<tr class='noskill".$sumArray['Poison']."'><td>Poison</td><td>".$helmetArray['Poison']."</td><td>".$vambracesArray['Poison']."</td><td>".$armorArray['Poison']."</td><td>".$waistArray['Poison']."</td><td>".$greavesArray['Poison']."</td><td>".$sumArray['Poison']."</td><td>".$Poison."</td></tr>".
"<tr class='noskill".$sumArray['Potential']."'><td>Potential</td><td>".$helmetArray['Potential']."</td><td>".$vambracesArray['Potential']."</td><td>".$armorArray['Potential']."</td><td>".$waistArray['Potential']."</td><td>".$greavesArray['Potential']."</td><td>".$sumArray['Potential']."</td><td>".$Potential."</td></tr>".
"<tr class='noskill".$sumArray['Protection']."'><td>Protection</td><td>".$helmetArray['Protection']."</td><td>".$vambracesArray['Protection']."</td><td>".$armorArray['Protection']."</td><td>".$waistArray['Protection']."</td><td>".$greavesArray['Protection']."</td><td>".$sumArray['Protection']."</td><td>".$Protection."</td></tr>".
"<tr class='noskill".$sumArray['Psychic']."'><td>Psychic</td><td>".$helmetArray['Psychic']."</td><td>".$vambracesArray['Psychic']."</td><td>".$armorArray['Psychic']."</td><td>".$waistArray['Psychic']."</td><td>".$greavesArray['Psychic']."</td><td>".$sumArray['Psychic']."</td><td>".$Psychic."</td></tr>".
"<tr class='noskill".$sumArray['Rec Speed']."'><td>Rec Speed</td><td>".$helmetArray['Rec Speed']."</td><td>".$vambracesArray['Rec Speed']."</td><td>".$armorArray['Rec Speed']."</td><td>".$waistArray['Rec Speed']."</td><td>".$greavesArray['Rec Speed']."</td><td>".$sumArray['Rec Speed']."</td><td>".$Rec."</td></tr>".
"<tr class='noskill".$sumArray['Recoil']."'><td>Recoil</td><td>".$helmetArray['Recoil']."</td><td>".$vambracesArray['Recoil']."</td><td>".$armorArray['Recoil']."</td><td>".$waistArray['Recoil']."</td><td>".$greavesArray['Recoil']."</td><td>".$sumArray['Recoil']."</td><td>".$Recoil."</td></tr>".
"<tr class='noskill".$sumArray['Reload']."'><td>Reload Spd</td><td>".$helmetArray['Reload Spd']."</td><td>".$vambracesArray['Reload Spd']."</td><td>".$armorArray['Reload Spd']."</td><td>".$waistArray['Reload Spd']."</td><td>".$greavesArray['Reload Spd']."</td><td>".$sumArray['Reload Spd']."</td><td>".$Reload."</td></tr>".
"<tr class='noskill".$sumArray['Resilience']."'><td>Resilience</td><td>".$helmetArray['Resilience']."</td><td>".$vambracesArray['Resilience']."</td><td>".$armorArray['Resilience']."</td><td>".$waistArray['Resilience']."</td><td>".$greavesArray['Resilience']."</td><td>".$sumArray['Resilience']."</td><td>".$Resilience."</td></tr>".
"<tr class='noskill".$sumArray['Sense']."'><td>Sense</td><td>".$helmetArray['Sense']."</td><td>".$vambracesArray['Sense']."</td><td>".$armorArray['Sense']."</td><td>".$waistArray['Sense']."</td><td>".$greavesArray['Sense']."</td><td>".$sumArray['Sense']."</td><td>".$Sense."</td></tr>".
"<tr class='noskill".$sumArray['Sharpener']."'><td>Sharpener</td><td>".$helmetArray['Sharpener']."</td><td>".$vambracesArray['Sharpener']."</td><td>".$armorArray['Sharpener']."</td><td>".$waistArray['Sharpener']."</td><td>".$greavesArray['Sharpener']."</td><td>".$sumArray['Sharpener']."</td><td>".$Sharpener."</td></tr>".
"<tr class='noskill".$sumArray['Sharpness']."'><td>Sharpness</td><td>".$helmetArray['Sharpness']."</td><td>".$vambracesArray['Sharpness']."</td><td>".$armorArray['Sharpness']."</td><td>".$waistArray['Sharpness']."</td><td>".$greavesArray['Sharpness']."</td><td>".$sumArray['Sharpness']."</td><td>".$Sharpness."</td></tr>".
"<tr class='noskill".$sumArray['Sleep']."'><td>Sleep</td><td>".$helmetArray['Sleep']."</td><td>".$vambracesArray['Sleep']."</td><td>".$armorArray['Sleep']."</td><td>".$waistArray['Sleep']."</td><td>".$greavesArray['Sleep']."</td><td>".$sumArray['Sleep']."</td><td>".$Sleep."</td></tr>".
"<tr class='noskill".$sumArray['SpeedSetup']."'><td>SpeedSetup</td><td>".$helmetArray['SpeedSetup']."</td><td>".$vambracesArray['SpeedSetup']."</td><td>".$armorArray['SpeedSetup']."</td><td>".$waistArray['SpeedSetup']."</td><td>".$greavesArray['SpeedSetup']."</td><td>".$sumArray['SpeedSetup']."</td><td>".$SpeedSetup."</td></tr>".
"<tr class='noskill".$sumArray['Spirit']."'><td>Spirit</td><td>".$helmetArray['Spirit']."</td><td>".$vambracesArray['Spirit']."</td><td>".$armorArray['Spirit']."</td><td>".$waistArray['Spirit']."</td><td>".$greavesArray['Spirit']."</td><td>".$sumArray['Spirit']."</td><td>".$Spirit."</td></tr>".
"<tr class='noskill".$sumArray['Stam Recov']."'><td>Stam Recov</td><td>".$helmetArray['Stam Recov']."</td><td>".$vambracesArray['Stam Recov']."</td><td>".$armorArray['Stam Recov']."</td><td>".$waistArray['Stam Recov']."</td><td>".$greavesArray['Stam Recov']."</td><td>".$sumArray['Stam Recov']."</td><td>".$Stam."</td></tr>".
"<tr class='noskill".$sumArray['Status']."'><td>Status</td><td>".$helmetArray['Status']."</td><td>".$vambracesArray['Status']."</td><td>".$armorArray['Status']."</td><td>".$waistArray['Status']."</td><td>".$greavesArray['Status']."</td><td>".$sumArray['Status']."</td><td>".$Status."</td></tr>".
"<tr class='noskill".$sumArray['Stun']."'><td>Stun</td><td>".$helmetArray['Stun']."</td><td>".$vambracesArray['Stun']."</td><td>".$armorArray['Stun']."</td><td>".$waistArray['Stun']."</td><td>".$greavesArray['Stun']."</td><td>".$sumArray['Stun']."</td><td>".$Stun."</td></tr>".
"<tr class='noskill".$sumArray['Survivor']."'><td>Survivor</td><td>".$helmetArray['Survivor']."</td><td>".$vambracesArray['Survivor']."</td><td>".$armorArray['Survivor']."</td><td>".$waistArray['Survivor']."</td><td>".$greavesArray['Survivor']."</td><td>".$sumArray['Survivor']."</td><td>".$Survivor."</td></tr>".
"<tr class='noskill".$sumArray['Tenderizer']."'><td>Tenderizer</td><td>".$helmetArray['Tenderizer']."</td><td>".$vambracesArray['Tenderizer']."</td><td>".$armorArray['Tenderizer']."</td><td>".$waistArray['Tenderizer']."</td><td>".$greavesArray['Tenderizer']."</td><td>".$sumArray['Tenderizer']."</td><td>".$Tenderizer."</td></tr>".
"<tr class='noskill".$sumArray['Thorns']."'><td>Thorns</td><td>".$helmetArray['Thorns']."</td><td>".$vambracesArray['Thorns']."</td><td>".$armorArray['Thorns']."</td><td>".$waistArray['Thorns']."</td><td>".$greavesArray['Thorns']."</td><td>".$sumArray['Thorns']."</td><td>".$Thorns."</td></tr>".
"<tr class='noskill".$sumArray['Thunder Res']."'><td>Thunder Res</td><td>".$helmetArray['Thunder Res']."</td><td>".$vambracesArray['Thunder Res']."</td><td>".$armorArray['Thunder Res']."</td><td>".$waistArray['Thunder Res']."</td><td>".$greavesArray['Thunder Res']."</td><td>".$sumArray['Thunder Res']."</td><td>".$ThunderRes."</td></tr>".
"<tr class='noskill".$sumArray['ThunderAtk']."'><td>ThunderAtk</td><td>".$helmetArray['ThunderAtk']."</td><td>".$vambracesArray['ThunderAtk']."</td><td>".$armorArray['ThunderAtk']."</td><td>".$waistArray['ThunderAtk']."</td><td>".$greavesArray['ThunderAtk']."</td><td>".$sumArray['ThunderAtk']."</td><td>".$ThunderAtk."</td></tr>".
"<tr class='noskill".$sumArray['Tremor Res']."'><td>Tremor Res</td><td>".$helmetArray['Tremor Res']."</td><td>".$vambracesArray['Tremor Res']."</td><td>".$armorArray['Tremor Res']."</td><td>".$waistArray['Tremor Res']."</td><td>".$greavesArray['Tremor Res']."</td><td>".$sumArray['Tremor Res']."</td><td>".$Tremor."</td></tr>".
"<tr class='noskill".$sumArray['Tripping Power']."'><td>Tripping Power</td><td>".$helmetArray['Tripping Power']."</td><td>".$vambracesArray['Tripping Power']."</td><td>".$armorArray['Tripping Power']."</td><td>".$waistArray['Tripping Power']."</td><td>".$greavesArray['Tripping Power']."</td><td>".$sumArray['Tripping Power']."</td><td>".$Tripping."</td></tr>".
"<tr class='noskill".$sumArray['Unscathed']."'><td>Unscathed</td><td>".$helmetArray['Unscathed']."</td><td>".$vambracesArray['Unscathed']."</td><td>".$armorArray['Unscathed']."</td><td>".$waistArray['Unscathed']."</td><td>".$greavesArray['Unscathed']."</td><td>".$sumArray['Unscathed']."</td><td>".$Unscathed."</td></tr>".
"<tr class='noskill".$sumArray['Water Atk']."'><td>Water Atk</td><td>".$helmetArray['Water Atk']."</td><td>".$vambracesArray['Water Atk']."</td><td>".$armorArray['Water Atk']."</td><td>".$waistArray['Water Atk']."</td><td>".$greavesArray['Water Atk']."</td><td>".$sumArray['Water Atk']."</td><td>".$Water."</td></tr>".
"<tr class='noskill".$sumArray['Wide-Range']."'><td>Wide-Range</td><td>".$helmetArray['Wide-Range']."</td><td>".$vambracesArray['Wide-Range']."</td><td>".$armorArray['Wide-Range']."</td><td>".$waistArray['Wide-Range']."</td><td>".$greavesArray['Wide-Range']."</td><td>".$sumArray['Wide-Range']."</td><td>".$WideRange."</td></tr>".
"<tr class='noskill".$sumArray['Wind Res']."'><td>Wind Res</td><td>".$helmetArray['Wind Res']."</td><td>".$vambracesArray['Wind Res']."</td><td>".$armorArray['Wind Res']."</td><td>".$waistArray['Wind Res']."</td><td>".$greavesArray['Wind Res']."</td><td>".$sumArray['Wind Res']."</td><td>".$Wind."</td></tr></table>";

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