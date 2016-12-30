#!/bin/bash
host="192.168.1.95:26200"
index="medical_record"
bak_name="lee_bak"

echo "make back settings"
url=$host"/_snapshot/"$bak_name" -d @settings.json" 
echo $url
curl -XPOST $url
echo ""

echo "get bak settingsk"
curl -XGET $host/_snapshot/$bak_name?pretty
echo ""

echo "start backup file"
curl -XPUT $host/_snapshot/$bak_name/$index?wait_for_completion=true&pretty

echo ""
echo "view dest file"
curl -XGET $host/_snapshot/$bak_name/$index/_status?pretty

echo ""

