from sentence_transformers import SentenceTransformer
import numpy as np
import json

SAMPLES_FILE = "samples.json"

politics = "San Francisco voters oust three school board members in recall vote, CNN projects"
topics = ["Politics", "Entertainment", "Art", "Music", "Lifestyle", "Academic", "Comedy", "Inspirational", "News",
          "Business", "Tech", "Sports"]
prompts = {topic: f"A tweet about {topic}" for topic in topics}


def read_samples():
    # Open file specified in SAMPLES_FILE
    with open(SAMPLES_FILE, "r") as samples_file:
        samples = json.load(samples_file)
    return samples


class Scorer:

    def __init__(self):
        self.model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
        self.prompt_vectors = {topic: np.array(self.model.encode(prompt)) for (topic, prompt) in prompts.items()}

    def score(self, sentence):
        embedding = np.array(self.model.encode(sentence))
        return {topic: prompt_vector.dot(embedding).item() for (topic, prompt_vector) in self.prompt_vectors.items()}
