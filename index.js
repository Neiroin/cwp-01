var name=process.argv[2];
var iter=3;
while (process.argv[iter])
{
    name+=', '+process.argv[iter];
    iter++;
}
console.log(`Hi ${name}!`);