# Generated by Django 4.1.4 on 2022-12-20 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cycling_org', '0041_rename_indexes'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='draft',
            field=models.BooleanField(default=False, editable=False),
        ),
    ]