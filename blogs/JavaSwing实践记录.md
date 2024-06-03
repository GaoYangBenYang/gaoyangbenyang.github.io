## 1.将JPanel保存为png

```java
    /**导出曲线图*/
private void SaveCurve() {
    try {
        //文件选择器
        JFileChooser fileChooser = new JFileChooser();
        //移除全部文件
        fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
        //后缀名过滤器，只显示.plc和.png
        FileNameExtensionFilter filterPng = new FileNameExtensionFilter("*.png", "png");
        fileChooser.setFileFilter(filterPng);
        FileNameExtensionFilter filterPlc = new FileNameExtensionFilter("*.plc", "plc");
        fileChooser.setFileFilter(filterPlc);
        //保存按钮
        int save = fileChooser.showSaveDialog(null);
        //用户点击保存，进行保存操作
        if (save == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();
            //判断保存的格式是.plc还是.png
            FileFilter fileFilter = fileChooser.getFileFilter();
            if ("*.plc".equals(fileFilter.getDescription())) {

            } else if ("*.png".equals(fileFilter.getDescription())) {
                //获取画布数据
                Dimension imagesize = this.drawPanel.getSize();
                BufferedImage bufferedImage = new BufferedImage(imagesize.width, imagesize.height, BufferedImage.TYPE_INT_RGB);
                Graphics2D g2 = bufferedImage.createGraphics();
                this.drawPanel.paint(g2);
                g2.dispose();
                File filePng = new File(file.getPath() + ".png");
                //文件不存在创建文件
                if (!filePng.exists()) {
                    filePng.createNewFile();
                    //保存文件
                    ImageIO.write(bufferedImage, "png", filePng);
                    JOptionPane.showMessageDialog(null, "保存成功！");
                } else {
                    //确认是否覆盖
                    int opt = JOptionPane.showConfirmDialog(null, "文件已存在，是否覆盖?", "确认", JOptionPane.YES_NO_OPTION);
                    if (opt == JOptionPane.YES_OPTION) {
                        //保存文件
                        ImageIO.write(bufferedImage, "png", filePng);
                        JOptionPane.showMessageDialog(null, "保存成功！");
                    }
                }

            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```