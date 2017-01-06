#!/bin/bash
host=localhost:26200
index="medical_record"
echo $host
echo $index
echo 'delete index'
curl -XDELETE $host/$index

echo 'put mapping'
 curl -XPOST $host/$index -d @medical_rcord_mappings.json

