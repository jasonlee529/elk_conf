#!/bin/bash

curl -XPUT http://localhost:19200/blog -d '{

"settings":{
    "number_of_shards":1,
    "number_of_replicas":2
}}'
