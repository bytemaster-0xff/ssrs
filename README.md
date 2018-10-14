# ssrs
Simple Sensor Repository Service

For more details please visit [SSRS](http://ssrs.iothost.net)

Pull Docker Container
```
docker pull bytemaster/ssrs:[VERSION]
```

Start Container
```
docker run -d -e port=80 -p 80:3000 --name ssrs bytemaster/ssrs:0.2.2
```

