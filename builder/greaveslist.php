<?php
    //connect  to the database
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error());
    //-select  the database to use
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table
    mysql_query ("set character_set_client='utf8'");
    mysql_query ("set character_set_results='utf8'");
    $search=$_POST['search'];
    $type=$_POST['type'];
    $sql="SELECT * FROM armor WHERE set_name LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skills LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR piece_name LIKE N'%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR chin_skill LIKE N'%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR armor_type LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill1 LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill2 LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill3 LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill4 LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill5 LIKE '%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill1_chin LIKE N'%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill2_chin LIKE N'%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill3_chin LIKE N'%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill4_chin LIKE N'%$search%' AND armor_type='Greaves' AND type LIKE '%$type%' OR skill5_chin LIKE N'%$search%' AND armor_type='Greaves'";
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
    echo "<div class='w3-row w3-center'><div class='builder w3-col w3-hide-large m1 w3-hide-small'>&nbsp;</div><div class='builder w3-col l1 m1 s1'><img onclick='updateurl(`" .$ArmorType. "`, " .$ID. "); greavesinfo(); skills();' src='../images/simulator/simu-icon-add.gif' style='width:21px;'></div><div class='builder w3-col l1 m1 s1 type" .$Type. "'>(" .$Type. ")</div><div class='builder w3-col l1 m1 s1'>" .$Level. "</div><div class='builder w3-col l2 m3 s4'>" .$SetName. "</div><div class='builder w3-col l1 m1 s1'><img src='../images/" .$Image. ".png' class='armorimage1' title='" .$SetName. "'></div><div class='builder w3-col l1 m3 s4'>" .$ItemName. "</div><div class='builder w3-col w3-hide-large m1 w3-hide-small'>&nbsp;</div><div class='w3-col w3-hide-large m1 w3-hide-small'>&nbsp;</div><div class='w3-col l1 m2 s12 " .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</div><div class='w3-col l1 m2 s12 " .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</div><div class='w3-col l1 m2 s12 " .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</div><div class='builder w3-col l1 m2 s12 " .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</div><div class='w3-col l1 m2 s12 " .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</div><div class='w3-col w3-hide-large m1 w3-hide-small'>&nbsp;</div></div></div>\n";

    }
    mysql_close();
?>