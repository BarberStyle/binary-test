


exports.getBinaryGap = async (req, res) => {
    try {
        const { num } = req.body;


        var bin = Math.abs(num).toString(2),
            binaryGap = 0,
            currentMax;

        for (var i = 0; i < bin.length; i++) {
            currentMax = 0;
            while (bin[i] === "0") {
                ++currentMax && ++i;
            }
            binaryGap = Math.max(binaryGap, currentMax);
        }


        res.json({ binaryGap });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}




